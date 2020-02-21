import { repository } from "./mock-repository";
import * as server from "../../server/server";

// Setup
import * as servicesSetup from "../../setup/services";

// Types
import { Server } from "http";

describe("Server", () => {
  it("starts successfully", async () => {
    const services: Services = servicesSetup.setupServices(repository);
    const startedServer: Server = await server.start(services, 8080);
    expect(startedServer).toBeDefined();
  });
});
