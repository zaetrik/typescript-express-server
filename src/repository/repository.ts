// Types
import { Repository, RepositoryConnection } from "repository";

const repository = (client: RepositoryConnection): Repository => {
  const getAllData = async () => {
    const allData = await client.query(`SELECT * FROM example LIMIT 100`);
    return allData.rows;
  };

  return {
    getAllData
  };
};

const connect = (repositoryConnection: RepositoryConnection): Repository => {
  return repository(repositoryConnection);
};

export { connect };
