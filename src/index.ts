import * as server from "./server/server";
import * as repository from "./repository/repository";

// Setup
import * as servicesSetup from "./setup/services";
import * as repositorySetup from "./setup/repository";

// Config
import { serverSettings } from "./config/config";

// Types
import { Repository, RepositoryConnection } from "repository";

const start = async () => {
  console.log("STARTING SERVER...");

  // Connect to data source (e.g. Postgres database)
  const repositoryConnection: RepositoryConnection = await repositorySetup.connect();

  // Use data source connection to set up the repository for all data access
  const connectedRepository: Repository = repository.connect(
    repositoryConnection
  );

  // Set up all all the services
  const services: Services = servicesSetup.setupServices(connectedRepository);

  // Start server and pass services to be used in controllers
  await server.start(services, serverSettings.port);

  console.log("SERVER STARTED...");
  console.log("LISTENING ON PORT", serverSettings.port);
};

start();
