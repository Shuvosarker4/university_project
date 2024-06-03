import express from "express";
import { UserController } from "./user.controller";

import { studentValidations } from "../students/student.validation";
import validateRequest from "../../app/middleware/validateRequest";
import { FacultyValidations } from "../Faculty/faculty.validation";

const router = express.Router();

router.post(
  "/create-student",
  validateRequest(studentValidations.createStudentValidationSchema),
  UserController.createStudent
);
router.post(
  "/create-faculty",
  validateRequest(FacultyValidations.createFacultyValidationSchema),
  UserController.createFaculty
);

export const UserRoutes = router;
