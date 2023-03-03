import { Request, Response } from "express";
import { errorResponse } from "../utils/errorResponse";

export const notFoundMiddleware = (req: Request, res: Response) =>
  res.status(404).send(errorResponse("Resource not found"));
