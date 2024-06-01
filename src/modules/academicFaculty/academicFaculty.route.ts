import express from "express";
import { AcademicFacultyControllers } from "./academicFaculty.controller";
import validateRequest from "../../app/middleware/validateRequest";
import { academicFacultyValidation } from "./academicFaculty.validation";

const router = express.Router();

router.post(
  "/create-academic-faculty",
  validateRequest(academicFacultyValidation.academicFacultyValidationSchema),
  AcademicFacultyControllers.createAcademicFaculty
);

router.get("/:facultyId", AcademicFacultyControllers.getSingleAcademicFaculty);

router.patch(
  "/:facultyId",
  validateRequest(
    academicFacultyValidation.updateAcademicFacultyValidationSchema
  ),
  AcademicFacultyControllers.updateAcademicFaculty
);

router.get("/", AcademicFacultyControllers.getAllAcademicFaculty);

export const AcademicFacultyRoutes = router;
