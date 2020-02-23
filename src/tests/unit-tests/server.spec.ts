import * as server from "../../server/server";

// Mocks
import { mockRepository } from "../mocks/mockRepository";
import { mockEventEmitter } from "../mocks/mockEventEmitter";
import { mockLogger } from "../mocks/mockLogger";

// Setup
import * as servicesSetup from "../../setup/services";

// Types
import { Server } from "http";
import { EventEmitter } from "events";

describe("Server", () => {
  it("starts successfully", async () => {
    const eventEmitter: EventEmitter = new EventEmitter();
    const services: Services = servicesSetup.setupServices(
      mockRepository,
      mockEventEmitter,
      mockLogger
    );
    const startedServer: Server = await server.start(
      services,
      8080,
      mockLogger
    );
    expect(startedServer).toBeDefined();
  });
});
