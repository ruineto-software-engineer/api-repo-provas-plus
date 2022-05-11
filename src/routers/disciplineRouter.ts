import { Router } from "express";
import disciplineController from "../controllers/disciplineController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const disciplineRouter = Router();

disciplineRouter.get(
  "/disciplines/:term",
  ensureAuthenticatedMiddleware,
  disciplineController.get
);

export default disciplineRouter;
