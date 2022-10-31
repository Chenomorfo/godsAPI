import { getName } from "@typegoose/typegoose";
import { Request, Response } from "express";
import GodModel from "../../models/God";
import MythModel from "../../models/Mythology";

class ApiController {
  public async getGod(req: Request, res: Response) {
    const god = await GodModel.find({ name: req.params.name }).lean();
    res.json(god);
  }

  public async getPanth(req: Request, res: Response) {
    const panth = await MythModel.find({ name: req.params.name }).lean();
    res.json(panth);
  }
}

const apiController = new ApiController();
export default apiController;
