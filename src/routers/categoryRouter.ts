import { Router } from "express";
import categoryController from "../controllers/categoryController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const categoryRouter = Router();

categoryRouter.get(
  "/categories",
  ensureAuthenticatedMiddleware,
  categoryController.findMany
);

export default categoryRouter;
