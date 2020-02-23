import events from "../subscribers/events";

// Types
import { Repository } from "repository";
import { CustomEventEmitter } from "customEventEmitter";
import { Logger } from "logger";

export default (
  repository: Repository,
  eventEmitter: CustomEventEmitter,
  logger: Logger
): ApiService => {
  const getAllDataFromRepository = async () => {
    // Emit an example event
    eventEmitter.emit(events.example.doStuff, "Example Event");

    return await repository.getAllData();
  };

  return {
    getAllDataFromRepository
  };
};
