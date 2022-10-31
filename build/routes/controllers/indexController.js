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
class IndexController {
    index(req, res) {
        res.render("index");
    }
    AllGods(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const gods = yield God_1.default.find().lean();
            res.render("Gods/All", { gods });
        });
    }
    DeleteGod(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield God_1.default.findByIdAndDelete(req.params.id);
            res.redirect("/All/Gods");
        });
    }
    AllPanths(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const panths = yield Mythology_1.default.find().lean();
            res.render("Panth/All", { panths });
        });
    }
    DeletePanth(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Mythology_1.default.findByIdAndDelete(req.params.id);
            res.redirect("/All/Panths");
        });
    }
}
const indexController = new IndexController();
exports.default = indexController;
