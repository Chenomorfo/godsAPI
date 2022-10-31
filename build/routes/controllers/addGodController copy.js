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
class AddController {
    Godindex(req, res) {
        res.render("Gods/Add");
    }
    AddGod(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, represent, description, picUrl } = req.body;
            const god = new God_1.default({ name, represent, description, picUrl });
            console.log(god);
            yield god.save();
            res.redirect("/All");
        });
    }
    getEditGod(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const god = yield God_1.default.findById(req.params.id).lean();
            res.render("Gods/Edit", { god });
        });
    }
    putEditGod(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, represent, description, picUrl } = req.body;
            yield God_1.default.findByIdAndUpdate(req.params.id, {
                name,
                represent,
                description,
                picUrl
            });
            res.redirect("/All");
        });
    }
    Panthindex(req, res) {
        res.render("Panth/Add");
    }
}
const addController = new AddController();
exports.default = addController;
