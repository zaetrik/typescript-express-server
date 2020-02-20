// Types
import { Repository } from "repository";

export default (repository: Repository): ApiService => ({
  getAllDataFromRepository: async () => {
    return await repository.getAllData();
  }
});
