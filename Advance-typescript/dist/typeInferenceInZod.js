"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const updateSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, { message: "name can not be empty" }),
    email: zod_1.z.string().email({ message: "Invalid email format" })
});
app.put("/user", (req, res) => {
    const { success } = updateSchema.safeParse(req.body);
    const updateBody = req.body;
    if (!success) {
        res.status(411).json({
            msg: "incorrect format "
        });
        return;
    }
});
