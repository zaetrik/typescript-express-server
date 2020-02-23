import { EventEmitter } from "events";

// Subscribers
import exampleSubscriber from "../subscribers/exampleSubscriber";

// Types
import { CustomEventEmitter } from "customEventEmitter";
import { Logger } from "logger";

export const setupEvents = (logger: Logger): CustomEventEmitter => {
  const eventEmitter: EventEmitter = new EventEmitter();
  setupSubscribers(eventEmitter, logger);

  return eventEmitter;
};

const setupSubscribers = (eventEmitter: CustomEventEmitter, logger: Logger) =>
  exampleSubscriber(eventEmitter, logger);
