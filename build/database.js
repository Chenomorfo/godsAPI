"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class Database {
    StartDB() {
        mongoose_1.default.connect('mongodb://localhost:27017/godsAPI')
            .then((db) => console.log('Database open'))
            .catch((err) => console.error(err));
    }
}
const db = new Database();
exports.default = db;
