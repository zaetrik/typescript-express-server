// Controllers
import API from "../controllers/api";

// Types
import { Application } from "express";
import { Logger } from "logger";

export default (app: Application, services: Services, logger: Logger) => {
  API(app, services, logger);
};
