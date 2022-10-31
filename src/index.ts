import express, { Application } from "express";
import db from "./database";
import morgan from "morgan";
import path from "path";
import { engine } from "express-handlebars";
import methodOverride from 'method-override';

//routes
import indexRoutes from "./routes/index";
import godRoutes from "./routes/addGodItem";
import panthRoutes from "./routes/addPanthItem";
import apiRoutes from "./routes/api";

class Server {
  public app: Application;
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config(): void {
    this.app.set("port", process.env.PORT || 3000);
    db.StartDB();

    this.app.set("view engine", ".hbs");
    this.app.set("views", path.join(__dirname, "views"));
    this.app.engine(
      ".hbs",
      engine({
        extname: ".hbs",
        defaultLayout: "main",
        layoutsDir: path.join(this.app.get("views"), "layouts"),
        partialsDir: path.join(this.app.get("views"), "partials"),
        
      }) 
    ); 

    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.static(path.join(__dirname, "public")));
    this.app.use(methodOverride('_method'))
  }
  routes(): void {
    this.app.use(indexRoutes);
    this.app.use('/god',godRoutes);
    this.app.use('/panth',panthRoutes);
    this.app.use('/api',apiRoutes);
  }
  start(): void {
    this.app.listen(this.app.get("port"), () =>
      console.log("Server open on:", this.app.get("port"))
    );
  }
}

const server = new Server();
server.start();
