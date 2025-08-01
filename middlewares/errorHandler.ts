import type { Response, Request, NextFunction } from "express";
import { errorResponse } from "../utils/responses.js";

export function errroHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err);
  errorResponse(res, 500, err);
  next();
}
