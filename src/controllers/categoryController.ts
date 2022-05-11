import { Request, Response } from "express";
import categoryService from "../services/categoryService.js";

async function findMany(req: Request, res: Response) {
  const categories = await categoryService.findMany();
  res.send({ categories });
}

export default {
  findMany,
};
