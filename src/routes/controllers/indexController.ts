import { Request, Response } from "express";
import GodModel from "../../models/God";
import MythModel from "../../models/Mythology";

class IndexController {
  public index(req: Request, res: Response) {
    res.render("index");
  }

  public async AllGods(req: Request, res: Response) {
    const gods = await GodModel.find().lean();

    res.render("Gods/All", { gods });
  }

  public async DeleteGod(req: Request, res: Response) {
    await GodModel.findByIdAndDelete(req.params.id);

    res.redirect("/All/Gods");
  }

  public async AllPanths(req: Request, res: Response) {
    const panths = await MythModel.find().lean();

    res.render("Panth/All", { panths });
  }

  public async DeletePanth(req: Request, res: Response) {
    await MythModel.findByIdAndDelete(req.params.id);

    res.redirect("/All/Panths");
  }
}

const indexController = new IndexController();
export default indexController;
