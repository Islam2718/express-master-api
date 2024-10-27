"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const database_1 = require("./config/database");
const user_routes_1 = __importDefault(require("./controllers/users/user.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
database_1.AppDataSource.initialize()
    .then(() => console.log("Database connected successfully"))
    .catch((error) => console.log(error));
app.use('/api/users', user_routes_1.default);
// Register other routes here
exports.default = app;
