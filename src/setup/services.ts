import apiService from "../services/apiService";

// Types
import { Repository } from "repository";
import { CustomEventEmitter } from "customEventEmitter";
import { Logger } from "logger";

export const setupServices = (
  repository: Repository,
  eventEmitter: CustomEventEmitter,
  logger: Logger
): Services => ({
  apiService: apiService(repository, eventEmitter, logger)
});
