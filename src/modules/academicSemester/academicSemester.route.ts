import express from "express";
import { AcademicSemesterController } from "./academicSemester.controller";
import validateRequest from "../../app/middleware/validateRequest";
import { AcademicSemesterValidations } from "./academicSemester.validation";

const router = express.Router();

router.get("/", AcademicSemesterController.getAllAcademicSemester);
router.get(
  "/:semesterId",
  AcademicSemesterController.getSingleAcademicSemester
);

router.post(
  "/create-academic-semester",
  validateRequest(
    AcademicSemesterValidations.createAcademicSemesterValidationSchema
  ),
  AcademicSemesterController.createAcademicSemester
);

router.patch(
  "/:semesterId",
  validateRequest(
    AcademicSemesterValidations.createAcademicSemesterValidationSchema
  ),
  AcademicSemesterController.updateAcademicSemester
);

export const AcademicSemesterRoutes = router;
