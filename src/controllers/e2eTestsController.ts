import { Request, Response } from "express";
import userService from "../services/userService.js";

async function truncate(req: Request, res: Response) {
  await userService.truncate();
  res.sendStatus(200);
}

export default {
  truncate,
};
