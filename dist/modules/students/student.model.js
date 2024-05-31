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
exports.Student = void 0;
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../../config"));
const userNameSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: [true, "First Name is required"],
        trim: true,
        maxlength: [20, "Name can not be more than 20 characters"],
    },
    middleName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, "Last Name is required"],
        maxlength: [20, "Name can not be more than 20 characters"],
    },
});
const guardianSchema = new mongoose_1.Schema({
    fatherName: {
        type: String,
        trim: true,
        required: [true, "Father Name is required"],
    },
    fatherOccupation: {
        type: String,
        trim: true,
        required: [true, "Father occupation is required"],
    },
    fatherContactNo: {
        type: String,
        required: [true, "Father Contact No is required"],
    },
    motherName: {
        type: String,
        required: [true, "Mother Name is required"],
    },
    motherOccupation: {
        type: String,
        required: [true, "Mother occupation is required"],
    },
    motherContactNo: {
        type: String,
        required: [true, "Mother Contact No is required"],
    },
});
const localGuradianSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    occupation: {
        type: String,
        required: [true, "Occupation is required"],
    },
    contactNo: {
        type: String,
        required: [true, "Contact number is required"],
    },
    address: {
        type: String,
        required: [true, "Address is required"],
    },
});
const studentSchema = new mongoose_1.Schema({
    id: { type: String, required: [true, "ID is required"], unique: true },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, "User ID is required"],
        unique: true,
        ref: "User",
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        maxlength: [20, "Password can not be more than 20 characters"],
    },
    name: {
        type: userNameSchema,
        required: [true, "Name is required"],
    },
    gender: {
        type: String,
        enum: {
            values: ["male", "female", "other"],
            message: "{VALUE} is not a valid gender",
        },
        required: [true, "Gender is required"],
    },
    dateOfBirth: { type: String },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    contactNo: { type: String, required: [true, "Contact number is required"] },
    emergencyContactNo: {
        type: String,
        required: [true, "Emergency contact number is required"],
    },
    bloodGroup: {
        type: String,
        enum: {
            values: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
            message: "{VALUE} is not a valid blood group",
        },
    },
    presentAddress: {
        type: String,
        required: [true, "Present address is required"],
    },
    permanentAddress: {
        type: String,
        required: [true, "Permanent address is required"],
    },
    guardian: {
        type: guardianSchema,
        required: [true, "Guardian information is required"],
    },
    localGuardian: {
        type: localGuradianSchema,
        required: [true, "Local guardian information is required"],
    },
    profileImg: { type: String },
    isDeleted: {
        type: Boolean,
        default: false,
    },
}, {
    toJSON: {
        virtuals: true,
    },
});
// virtual
studentSchema.virtual("fullName").get(function () {
    return `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`;
});
// pre save middleware/ hook : will work on create()  save()
studentSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = this;
        user.password = yield bcrypt_1.default.hash(user.password, Number(config_1.default.bcrypt_salt_rounds));
        next();
    });
});
// post save middleware / hook
studentSchema.post("save", function (doc, next) {
    doc.password = "";
    next();
});
// Query Middleware
studentSchema.pre("find", function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});
//query  for findOne
studentSchema.pre("findOne", function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});
//query for aggregate
studentSchema.pre("aggregate", function (next) {
    this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
    next();
});
//creating a custom static method
studentSchema.statics.isUserExists = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingUser = yield exports.Student.findOne({ id });
        return existingUser;
    });
};
exports.Student = (0, mongoose_1.model)("Student", studentSchema);
