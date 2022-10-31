"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const addPanthController_1 = __importDefault(require("./controllers/addPanthController"));
class PanthRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/add', addPanthController_1.default.Panthindex);
        this.router.post('/add', addPanthController_1.default.AddPanth);
        this.router.get('/edit/:id', addPanthController_1.default.getEditPanth);
        this.router.put('/edit/:id', addPanthController_1.default.putEditPanth);
    }
}
const panthRoutes = new PanthRoutes();
exports.default = panthRoutes.router;
