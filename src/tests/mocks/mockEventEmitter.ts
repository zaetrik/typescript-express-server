// Types
import { CustomEventEmitter } from "customEventEmitter";

export const mockEventEmitter: CustomEventEmitter = {
  on: (event, listener) => console.log(event),
  emit: (event: string | symbol, ...args: any[]) => true
};
