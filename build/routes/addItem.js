"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const addItemController_1 = __importDefault(require("./controllers/addItemController"));
class addItemRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/add', addItemController_1.default.Godindex);
        this.router.post('/add', addItemController_1.default.AddGod);
        this.router.get('/edit/:id', addItemController_1.default.getEditGod);
        this.router.put('/edit/:id', addItemController_1.default.putEditGod);
        this.router.post('/add', addItemController_1.default.Panthindex);
    }
}
const addRoutes = new addItemRoutes();
exports.default = addRoutes.router;
