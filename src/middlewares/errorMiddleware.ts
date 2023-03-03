import { NextFunction, Request, Response } from "express";
import { errorResponse } from "../utils/errorResponse";

export const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  if (err) {
    if (err.isJoi) {
      res.status(422).json({
        message: "Validation error",
        errors: err.details.map((item: { message: string; type: string }) => ({
          // eslint-disable-next-line quotes
          message: item.message.replace('/"/g', "'"),
          type: item.type,
        })),
      });
      return;
    }
    const statusCode = err.status || 500;
    res.status(statusCode).json(errorResponse(err));
  }
};
