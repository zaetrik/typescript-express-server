import apiService from "./apiService";

// Types
import { Repository } from "repository";

export default (repository: Repository): Services => ({
  apiService: apiService(repository)
});
