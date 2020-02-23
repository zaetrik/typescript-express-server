import * as Joi from "@hapi/joi";
import httpStatus from "http-status";
import * as loggerSetup from "../../../setup/logger";

// Types
import { Request, Response, NextFunction } from "express";
import * as JoiTypes from "joi";

const logger = loggerSetup.setupLogger();

const validate = (
  req: Request,
  res: Response,
  next: NextFunction,
  schema: JoiTypes.ObjectSchema,
  dataToValidate: object
) => {
  const schemaValidation = schema.validate(dataToValidate);

  if (!schemaValidation.error) {
    next();
  } else {
    logger.log(
      "info",
      "Could not validate query: " + JSON.stringify(schemaValidation),
      { route: req.originalUrl }
    );

    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
};

const validateExampleRoute = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema: JoiTypes.ObjectSchema = Joi.object({
    exampleQueryParam: Joi.string().required(),
    exampleBodyParam: Joi.number().required()
  });

  validate(req, res, next, schema, { ...req.params, ...req.body });
};

export { validateExampleRoute };
