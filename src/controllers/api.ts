import httpStatus from "http-status";

// Types
import { Application, Request, Response, NextFunction } from "express";

// repository is used to pass different DB functions (e.g. testDbAbstraction)
export = (app: Application, services: Services) => {
  app.get("/api", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const allDataFromRepository = await services.apiService.getAllDataFromRepository();
      return res.status(httpStatus.OK).send(allDataFromRepository);
    } catch (err) {
      next(err);
    }
  });
};
