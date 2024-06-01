import express from "express";
import { UserController } from "./user.controller";

import { studentValidations } from "../students/student.validation";
import validateRequest from "../../app/middleware/validateRequest";

const router = express.Router();

router.post(
  "/create-student",
  validateRequest(studentValidations.createStudentValidationSchema),
  UserController.createStudent
);

export const UserRoutes = router;
