import * as repositorySetup from "./setup/repository";
import * as server from "./server/server";
import { serverSettings } from "./config/config";
import * as repository from "./repository/repository";
import setupServices from "./services/setup";

// Types
import { Repository, RepositoryConnection } from "repository";

const start = async () => {
  const repositoryConnection: RepositoryConnection = await repositorySetup.connect();
  const connectedRepository: Repository = repository.connect(
    repositoryConnection
  );

  const services: Services = setupServices(connectedRepository);

  await server.start(services);
  console.log("SERVER STARTED...");
  console.log("LISTENING ON PORT", serverSettings.port);
};

start();
