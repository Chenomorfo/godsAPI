import { Router } from "express";
import apiCtrlls from "./controllers/apiController";

class ApiRoutes {
    public router : Router = Router();
    constructor() {
        this.config();
    }

    config():void{

        this.router.get('/god/:name',apiCtrlls.getGod)
        this.router.get('/panth/:name',apiCtrlls.getPanth)

    }

}

const apiRoutes = new ApiRoutes();
export default apiRoutes.router;