import { Pool as PostgresPool, QueryResultRow } from "pg";

interface Repository {
  getAllData: () => Promise<any[]>;
}

export { Repository, PostgresPool as RepositoryConnection };
