"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./database"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const express_handlebars_1 = require("express-handlebars");
const method_override_1 = __importDefault(require("method-override"));
//routes
const index_1 = __importDefault(require("./routes/index"));
const addGodItem_1 = __importDefault(require("./routes/addGodItem"));
const addPanthItem_1 = __importDefault(require("./routes/addPanthItem"));
const api_1 = __importDefault(require("./routes/api"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set("port", process.env.PORT || 3000);
        database_1.default.StartDB();
        this.app.set("view engine", ".hbs");
        this.app.set("views", path_1.default.join(__dirname, "views"));
        this.app.engine(".hbs", (0, express_handlebars_1.engine)({
            extname: ".hbs",
            defaultLayout: "main",
            layoutsDir: path_1.default.join(this.app.get("views"), "layouts"),
            partialsDir: path_1.default.join(this.app.get("views"), "partials"),
        }));
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
        this.app.use((0, method_override_1.default)('_method'));
    }
    routes() {
        this.app.use(index_1.default);
        this.app.use('/god', addGodItem_1.default);
        this.app.use('/panth', addPanthItem_1.default);
        this.app.use('/api', api_1.default);
    }
    start() {
        this.app.listen(this.app.get("port"), () => console.log("Server open on:", this.app.get("port")));
    }
}
const server = new Server();
server.start();
