import API from "../controllers/api";

// Types
import { Application } from "express";

export default (app: Application, services: Services) => {
  API(app, services);
};
