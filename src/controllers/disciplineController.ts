import { Request, Response } from "express";
import disciplineService from "../services/disciplineService.js";

async function get(req: Request, res: Response) {
  const { term } = req.params;
  const disciplines = await disciplineService.getByTerm(+term);

  res.send(disciplines);
}

export default {
  get,
};
