"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const globalErrorHandler = (err, req, res, next) => {
    const statusCode = 500;
    const message = err.message || "Something went wrong";
    return res.status(http_status_1.default.BAD_REQUEST).json({
        success: false,
        message,
        error: err,
    });
};
exports.default = globalErrorHandler;
