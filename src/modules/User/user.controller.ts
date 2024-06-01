import { NextFunction, Request, RequestHandler, Response } from "express";
import { UserService } from "./user.service";
import sendResponse from "../../app/utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../app/utils/catchAsync";

const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;

  //zod validation
  // const zodValidation = studentValidationSchema.parse(studentData);

  const result = await UserService.createStudentIntoDB(password, studentData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student is created succesfully",
    data: result,
  });
});

export const UserController = {
  createStudent,
};
