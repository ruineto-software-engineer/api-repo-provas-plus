import { Request, Response } from "express";
import testService from "../services/testService.js";

async function insert(req: Request, res: Response) {
  await testService.insert(req.body);
  res.sendStatus(201);
}

async function find(req: Request, res: Response) {
  const { groupBy, teacher, discipline } = req.query as {
    groupBy: string;
    teacher: string;
    discipline: string;
  };

  if (groupBy !== "disciplines" && groupBy !== "teachers") {
    return res.sendStatus(400);
  }

  const tests = await testService.find({ groupBy, teacher, discipline });
  res.send({ tests });
}

async function view(req: Request, res: Response) {
  const { id } = req.params;

  await testService.view(+id);
  res.sendStatus(200);
}

export default {
  find,
  view,
  insert,
};
