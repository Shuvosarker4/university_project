"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const student_controller_1 = require("./student.controller");
const validateRequest_1 = __importDefault(require("../../app/middleware/validateRequest"));
const student_validation_1 = require("./student.validation");
const router = express_1.default.Router();
router.get("/", student_controller_1.StudentControllers.getAllStudent);
// router.post("/create-students", StudentControllers.createStudent);
router.patch("/:studentId", (0, validateRequest_1.default)(student_validation_1.studentValidations.updateStudentValidationSchema), student_controller_1.StudentControllers.updateStudent);
router.delete("/:studentId", student_controller_1.StudentControllers.deleteStudent);
router.get("/:studentId", student_controller_1.StudentControllers.getSingleStudent);
exports.StudentRoutes = router;
