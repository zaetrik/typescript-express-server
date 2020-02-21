import apiService from "../services/apiService";

// Types
import { Repository } from "repository";

export const setupServices = (repository: Repository): Services => ({
  apiService: apiService(repository)
});
