import {Router} from 'express';
import addItemCtrlls from './controllers/addGodController'

class addItemRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }

    config():void{

        this.router.get('/add',addItemCtrlls.Godindex)
        this.router.post('/add',addItemCtrlls.AddGod)
        this.router.get('/edit/:id',addItemCtrlls.getEditGod)
        this.router.put('/edit/:id',addItemCtrlls.putEditGod)



    }
}

const addRoutes = new addItemRoutes();
export default addRoutes.router;