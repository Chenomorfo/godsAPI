"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiController_1 = __importDefault(require("./controllers/apiController"));
class ApiRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/god/:name', apiController_1.default.getGod);
        this.router.get('/panth/:name', apiController_1.default.getPanth);
    }
}
const apiRoutes = new ApiRoutes();
exports.default = apiRoutes.router;
