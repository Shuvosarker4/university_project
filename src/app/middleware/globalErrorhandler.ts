import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = 500;
  const message = err.message || "Something went wrong";
  return res.status(httpStatus.BAD_REQUEST).json({
    success: false,
    message,
    error: err,
  });
};

export default globalErrorHandler;
