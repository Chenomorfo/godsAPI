"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const addGodController_1 = __importDefault(require("./controllers/addGodController"));
class addItemRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/add', addGodController_1.default.Godindex);
        this.router.post('/add', addGodController_1.default.AddGod);
        this.router.get('/edit/:id', addGodController_1.default.getEditGod);
        this.router.put('/edit/:id', addGodController_1.default.putEditGod);
    }
}
const addRoutes = new addItemRoutes();
exports.default = addRoutes.router;
