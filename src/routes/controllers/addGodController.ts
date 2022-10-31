import { Request, Response } from "express";

import GodModel from "../../models/God";

class AddController {
  public Godindex(req: Request, res: Response) {
    res.render("Gods/Add");
  }

  public async AddGod(req: Request, res: Response) {
    const { name, represent, description, picUrl } = req.body;

    const god = new GodModel({ name, represent, description, picUrl });
    console.log(god);
    await god.save();
    res.redirect("/All/Gods");
  }
  public async getEditGod(req: Request, res: Response) {
    const god = await GodModel.findById(req.params.id).lean();
    res.render("Gods/Edit", { god });
  }

  public async putEditGod(req: Request, res: Response) {
    const {name,represent,description,picUrl} = req.body;
    await GodModel.findByIdAndUpdate(req.params.id,{
      name,
      represent,
      description,
      picUrl
    })
    res.redirect("/All/Gods");
  }

}

const addController = new AddController();
export default addController;
