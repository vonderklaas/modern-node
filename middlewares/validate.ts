import type { Response, Request, NextFunction } from "express";
import { type ZodSchema } from "zod";

export const validate =
  <T>(schema: ZodSchema<T>) =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return res
        .status(400)
        .json({ success: false, errors: result.error.issues });
    }

    next();
  };
