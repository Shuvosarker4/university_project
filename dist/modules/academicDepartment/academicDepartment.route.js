"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicDepartmentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const academicDepartment_validation_1 = require("./academicDepartment.validation");
const validateRequest_1 = __importDefault(require("../../app/middleware/validateRequest"));
const academicDepartment_controller_1 = require("./academicDepartment.controller");
const router = express_1.default.Router();
router.post("/create-academic-department", (0, validateRequest_1.default)(academicDepartment_validation_1.academicDepartmentValidation.academicDepartmentValidationSchema), academicDepartment_controller_1.AcademicDepartmentControllers.createAcademicDepartment);
router.get("/:departmentId", academicDepartment_controller_1.AcademicDepartmentControllers.getSingleAcademicDepartment);
router.patch("/:departmentId", (0, validateRequest_1.default)(academicDepartment_validation_1.academicDepartmentValidation.updateAcademicDepartmentValidationSchema), academicDepartment_controller_1.AcademicDepartmentControllers.updateAcademicDepartment);
router.get("/", academicDepartment_controller_1.AcademicDepartmentControllers.getAllAcademicDepartment);
exports.AcademicDepartmentRoutes = router;
