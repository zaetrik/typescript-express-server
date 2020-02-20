import express, { Request, Response, NextFunction } from "express";
import logSetup from "../setup/serverLog";
import helmetSetup from "../setup/helmet";
import controllersSetup from "../setup/controllers";
import { serverSettings } from "../config/config";
import logger from "../utils/logger";
import cors from "cors";

export const start = (services: Services): Promise<express.Application> => {
  return new Promise((resolve, reject) => {
    const app: express.Application = express();

    app.use(logSetup);
    app.use(helmetSetup);
    app.use(cors());
    app.use(express.json());

    app.use((err, req: Request, res: Response, next: NextFunction) => {
      logger.log("error", err, { route: req.originalUrl });
      res.status(500).send("Something went wrong!");
    });

    controllersSetup(app, services);

    // finally we start the server, and return the newly created server
    const server = app.listen(serverSettings.port, () => resolve(server));
  });
};
