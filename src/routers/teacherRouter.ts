import { Router } from "express";
import teachersController from "../controllers/teachersController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const teacherRouter = Router();

teacherRouter.get(
  "/teachers/:discipline",
  ensureAuthenticatedMiddleware,
  teachersController.get
);

export default teacherRouter;
