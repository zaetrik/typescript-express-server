// Types
import { Repository } from "repository";

export default (repository: Repository): ApiService => {
  const getAllDataFromRepository = async () => {
    return await repository.getAllData();
  };

  return {
    getAllDataFromRepository
  };
};
