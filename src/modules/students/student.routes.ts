import express from "express";
import { StudentControllers } from "./student.controller";

const router = express.Router();
router.get("/", StudentControllers.getAllStudent);
// router.post("/create-students", StudentControllers.createStudent);
router.delete("/:studentId", StudentControllers.deleteStudent);
router.get("/:studentId", StudentControllers.getSingleStudent);

export const StudentRoutes = router;
