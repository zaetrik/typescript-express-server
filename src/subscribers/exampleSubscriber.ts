import events from "./events";

// Types
import { CustomEventEmitter } from "customEventEmitter";
import { Logger } from "logger";

export default (eventEmitter: CustomEventEmitter, logger: Logger) => {
  eventEmitter.on(events.example.doStuff, (...args) =>
    console.log("Handling our example event =>", ...args)
  );
};
