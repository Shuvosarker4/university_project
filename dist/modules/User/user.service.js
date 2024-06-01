"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const config_1 = __importDefault(require("../../config"));
const academicSemester_model_1 = require("../academicSemester/academicSemester.model");
const student_model_1 = require("../students/student.model");
const user_model_1 = require("./user.model");
const user_utils_1 = require("./user.utils");
const createStudentIntoDB = (password, payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = {};
    userData.password = password || config_1.default.default_pass;
    userData.role = "student";
    //find academic semester info
    const admissionSemester = yield academicSemester_model_1.AcademicSemester.findById(payLoad.admissionSemester);
    //set manually generated it
    userData.id = yield (0, user_utils_1.generateStudentId)(admissionSemester);
    // create a user
    const newUser = yield user_model_1.User.create(userData);
    //create a student
    if (Object.keys(newUser).length) {
        // set id , _id as user
        payLoad.id = newUser.id;
        payLoad.user = newUser._id; //reference _id
        const newStudent = yield student_model_1.Student.create(payLoad);
        return newStudent;
    }
});
exports.UserService = {
    createStudentIntoDB,
};
