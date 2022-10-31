import {Router} from 'express';
import addItemCtrlls from './controllers/addPanthController'

class PanthRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }

    config():void{

        this.router.get('/add',addItemCtrlls.Panthindex)
        this.router.post('/add',addItemCtrlls.AddPanth)

        this.router.get('/edit/:id',addItemCtrlls.getEditPanth)
        this.router.put('/edit/:id',addItemCtrlls.putEditPanth)


    }
}

const panthRoutes = new PanthRoutes();
export default panthRoutes.router;