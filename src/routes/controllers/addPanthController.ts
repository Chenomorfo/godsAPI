import { Request, Response } from "express";
import PanthModel from "../../models/Mythology";

class AddPanthController {
  public Panthindex(req: Request, res: Response) {
    res.render("Panth/Add");
  }
  public async AddPanth(req: Request, res: Response) {
    const { name, kingdom, represent, description, picUrl } = req.body;
    const newPath = new PanthModel({
      name,
      kingdom,
      represent,
      description,
      picUrl,
    });

    await newPath.save();
    res.redirect('/All/Panths')
  }
  public async getEditPanth(req: Request, res: Response) {

    const panth = await PanthModel.findById(req.params.id).lean()
    
    res.render('Panth/Edit',{panth})
  }
  public async putEditPanth(req: Request, res: Response) {
    const {name,kingdom,represent,description,picUrl} = req.body;
    await PanthModel.findByIdAndUpdate(req.params.id,{
      name,
      kingdom,
      represent,
      description,
      picUrl
    })
    res.redirect("/All/Panths");
  }
}

const addPanthController = new AddPanthController();
export default addPanthController;
