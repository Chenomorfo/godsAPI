"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = __importDefault(require("./controllers/indexController"));
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', indexController_1.default.index);
        this.router.get('/All/Gods', indexController_1.default.AllGods);
        this.router.delete('/All/god/delete/:id', indexController_1.default.DeleteGod);
        this.router.get('/All/Panths', indexController_1.default.AllPanths);
        this.router.delete('/All/panth/delete/:id', indexController_1.default.DeletePanth);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
