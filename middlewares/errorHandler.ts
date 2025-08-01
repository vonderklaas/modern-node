import type { Response, Request, NextFunction } from "express";
import { errorResponse } from "../utils/responses.js";

export function errroHandler(
  err: any,
  req: Request,
  response: Response,
  next: NextFunction
) {
  console.error(err);
  errorResponse(response, 500, err);
  next();
}
