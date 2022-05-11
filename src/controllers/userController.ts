import { Request, Response } from "express";
import userService from "../services/userService.js";

async function signUp(req: Request, res: Response) {
  const user = req.body;

  await userService.signUp(user);

  res.sendStatus(201);
}

async function signIn(req: Request, res: Response) {
  const user = req.body;

  const token = await userService.signIn(user);

  res.send({ token });
}

export default {
  signUp,
  signIn,
};
