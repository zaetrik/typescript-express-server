import { dbSettings } from "../config/config";
import pg from "pg";

// Types
import { RepositoryConnection } from "repository";

/**
 * Connects to db
 * @returns { Promise<RepositoryConnection> }
 */
const connect = (): Promise<RepositoryConnection> => {
  return new Promise(async (resolve, reject) => {
    try {
      const Pool = pg.Pool;
      const pool = new Pool(dbSettings.dbParameters());

      await createTables(pool);

      resolve(pool);
    } catch (err) {
      reject(err);
    }
  });
};

const createTables = async (pool: RepositoryConnection): Promise<void> => {
  const tableExists: boolean = await checkTableExists(
    dbSettings.dbParameters().database,
    pool
  );

  if (!tableExists) {
    await pool.query(
      `CREATE TABLE ${
        dbSettings.dbParameters().database
      }(id SERIAL PRIMARY KEY, data JSON NOT NULL)`
    );
  }
};

const checkTableExists = async (
  tableName: string,
  pool: RepositoryConnection
): Promise<boolean> => {
  try {
    await pool.query(`SELECT 'public.${tableName}'::regclass`);

    return true;
  } catch (err) {
    return false;
  }
};

export { connect };
