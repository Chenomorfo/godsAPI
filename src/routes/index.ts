import {Router} from 'express';
import indexCtrlls from './controllers/indexController'

class IndexRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }

    config():void{

        this.router.get('/', indexCtrlls.index)
        this.router.get('/All/Gods', indexCtrlls.AllGods)
        this.router.delete('/All/god/delete/:id', indexCtrlls.DeleteGod)

        this.router.get('/All/Panths', indexCtrlls.AllPanths)
        this.router.delete('/All/panth/delete/:id', indexCtrlls.DeletePanth)


    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;