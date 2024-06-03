"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const student_validation_1 = require("../students/student.validation");
const validateRequest_1 = __importDefault(require("../../app/middleware/validateRequest"));
const faculty_validation_1 = require("../Faculty/faculty.validation");
const router = express_1.default.Router();
router.post("/create-student", (0, validateRequest_1.default)(student_validation_1.studentValidations.createStudentValidationSchema), user_controller_1.UserController.createStudent);
router.post("/create-faculty", (0, validateRequest_1.default)(faculty_validation_1.FacultyValidations.createFacultyValidationSchema), user_controller_1.UserController.createFaculty);
exports.UserRoutes = router;
