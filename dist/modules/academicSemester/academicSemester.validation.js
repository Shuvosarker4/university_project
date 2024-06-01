"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemesterValidations = void 0;
const zod_1 = require("zod");
const academicSemester_constant_1 = require("./academicSemester.constant");
const createAcademicSemesterValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.enum([...academicSemester_constant_1.AcademicSemesterName]),
        year: zod_1.z.string(),
        code: zod_1.z.enum([...academicSemester_constant_1.AcademicSemesterCode]),
        startMonths: zod_1.z.enum([...academicSemester_constant_1.Months]),
        endMonths: zod_1.z.enum([...academicSemester_constant_1.Months]),
    }),
});
exports.AcademicSemesterValidations = {
    createAcademicSemesterValidationSchema,
};
