import express from "express";
import { StudentControllers } from "./student.controller";
import validateRequest from "../../app/middleware/validateRequest";
import { studentValidations } from "./student.validation";

const router = express.Router();
router.get("/", StudentControllers.getAllStudent);
// router.post("/create-students", StudentControllers.createStudent);
router.patch(
  "/:studentId",
  validateRequest(studentValidations.updateStudentValidationSchema),
  StudentControllers.updateStudent
);
router.delete("/:studentId", StudentControllers.deleteStudent);
router.get("/:studentId", StudentControllers.getSingleStudent);

export const StudentRoutes = router;
