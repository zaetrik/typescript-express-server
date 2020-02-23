import * as server from "./server/server";
import * as repository from "./repository/repository";

// Setup
import * as servicesSetup from "./setup/services";
import * as repositorySetup from "./setup/repository";
import * as eventsSetup from "./setup/events";
import * as loggerSetup from "./setup/logger";

// Config
import { serverSettings } from "./config/config";

// Types
import { Repository, RepositoryConnection } from "repository";
import { CustomEventEmitter } from "CustomEventEmitter";
import { Logger } from "logger";

const start = async () => {
  console.log("STARTING SERVER...");

  // Set up logger
  const logger: Logger = loggerSetup.setupLogger();

  // Set up event emitter & subscribers
  const eventEmitter: CustomEventEmitter = eventsSetup.setupEvents(logger);

  // Connect to data source (e.g. Postgres database)
  const repositoryConnection: RepositoryConnection = await repositorySetup.connect();

  // Use data source connection to set up the repository for all data access
  const connectedRepository: Repository = repository.connect(
    repositoryConnection
  );

  // Set up all all the services
  const services: Services = servicesSetup.setupServices(
    connectedRepository,
    eventEmitter,
    logger
  );

  // Start server and pass services to be used in controllers
  await server.start(services, serverSettings.port, logger);

  console.log("SERVER STARTED...");
  console.log("LISTENING ON PORT", serverSettings.port);
};

start();

// “uncaughtException” event is emitted when an uncaught JavaScript exception bubbles all the way back to the event loop
process.on("uncaughtException", error => {
  console.log("Oh my god, something terrible happend: ", error);

  process.exit(1); // exit application
});

// “unhandledRejection” event is emitted whenever a Promise is rejected and no error handler is attached to the promise within a turn of the event loop
process.on("unhandledRejection", (error, promise) => {
  console.log(
    " Oh Lord! We forgot to handle a promise rejection here: ",
    promise
  );
  console.log(" The error was: ", error);
});
