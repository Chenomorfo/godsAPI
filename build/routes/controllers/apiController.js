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
const God_1 = __importDefault(require("../../models/God"));
const Mythology_1 = __importDefault(require("../../models/Mythology"));
class ApiController {
    getGod(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const god = yield God_1.default.find({ name: req.params.name }).lean();
            res.json(god);
        });
    }
    getPanth(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const panth = yield Mythology_1.default.find({ name: req.params.name }).lean();
            res.json(panth);
        });
    }
}
const apiController = new ApiController();
exports.default = apiController;
