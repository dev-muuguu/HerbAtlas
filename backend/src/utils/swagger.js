"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const options = {
    failOnErrors: true,
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Herb Atlas v1.0",
            version: "1.0",
            description: "Herb Atlas ийн SWAGGER ашиглах вэ",
        },
    },
    apis: ["./src/api/**/router.ts"],
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
exports.default = swaggerSpec;
