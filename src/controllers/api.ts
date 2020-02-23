// Packages
import httpStatus from "http-status";

// Types
import { Application, Request, Response, NextFunction } from "express";
import { Logger } from "logger";

export = (app: Application, services: Services, logger: Logger) => {
  app.get("/api", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const allDataFromRepository = await services.apiService.getAllDataFromRepository();
      return res.status(httpStatus.OK).send(allDataFromRepository);
    } catch (err) {
      logger.error(err);
      next(err);
    }
  });
};
