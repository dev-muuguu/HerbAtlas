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
exports.getUser = exports.allUsers = exports.createUser = void 0;
const database_1 = __importDefault(require("../../../database"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstname, username, password } = req.body;
    try {
        if (!firstname || !username || !password) {
            return res.status(400).json({
                success: false,
                message: " username, password, or firstname is missing",
            });
        }
        const cretedUser = yield database_1.default.user.create({
            data: {
                firstname: firstname,
                username: username,
                password: password,
            },
        });
        return res.status(200).json({
            success: true,
            message: `${username} -- has been registered successfully `,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "error",
        });
    }
});
exports.createUser = createUser;
const allUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listUsers = yield database_1.default.user.findMany();
        return res.status(200).json({
            success: true,
            data: listUsers,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "error",
        });
    }
});
exports.allUsers = allUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield database_1.default.user.findUnique({
            where: {
                id: Number(id),
            },
        });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        return res.status(200).json({
            success: true,
            data: user,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "error",
        });
    }
});
exports.getUser = getUser;
