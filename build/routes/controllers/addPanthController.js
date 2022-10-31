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
const Mythology_1 = __importDefault(require("../../models/Mythology"));
class AddPanthController {
    Panthindex(req, res) {
        res.render("Panth/Add");
    }
    AddPanth(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, kingdom, represent, description, picUrl } = req.body;
            const newPath = new Mythology_1.default({
                name,
                kingdom,
                represent,
                description,
                picUrl,
            });
            yield newPath.save();
            res.redirect('/All/Panths');
        });
    }
    getEditPanth(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const panth = yield Mythology_1.default.findById(req.params.id).lean();
            res.render('Panth/Edit', { panth });
        });
    }
    putEditPanth(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, kingdom, represent, description, picUrl } = req.body;
            yield Mythology_1.default.findByIdAndUpdate(req.params.id, {
                name,
                kingdom,
                represent,
                description,
                picUrl
            });
            res.redirect("/All/Panths");
        });
    }
}
const addPanthController = new AddPanthController();
exports.default = addPanthController;
