"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("../../modules/User/user.route");
const student_routes_1 = require("../../modules/students/student.routes");
const academicSemester_route_1 = require("../../modules/academicSemester/academicSemester.route");
const academicFaculty_route_1 = require("../../modules/academicFaculty/academicFaculty.route");
const academicDepartment_route_1 = require("../../modules/academicDepartment/academicDepartment.route");
const faculty_route_1 = require("../../modules/Faculty/faculty.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/users",
        route: user_route_1.UserRoutes,
    },
    {
        path: "/students",
        route: student_routes_1.StudentRoutes,
    },
    {
        path: "/faculties",
        route: faculty_route_1.FacultyRoutes,
    },
    {
        path: "/academic-semesters",
        route: academicSemester_route_1.AcademicSemesterRoutes,
    },
    {
        path: "/academic-faculties",
        route: academicFaculty_route_1.AcademicFacultyRoutes,
    },
    {
        path: "/academic-department",
        route: academicDepartment_route_1.AcademicDepartmentRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
