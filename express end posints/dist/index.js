"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const tasks = [];
app.get("/tasks", (req, res) => {
    res.json(tasks);
});
app.listen(3000, () => console.log("server running on port 3000"));
