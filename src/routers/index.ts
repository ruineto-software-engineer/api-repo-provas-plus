import { Router } from "express";
import categoryRouter from "./categoryRouter.js";
import disciplineRouter from "./disciplineRouter.js";
import e2eRouter from "./e2eRouter.js";
import teacherRouter from "./teacherRouter.js";
import testRouter from "./testRouter.js";
import userRouter from "./userRouter.js";

const router = Router();
router.use(userRouter);
router.use(testRouter);
router.use(categoryRouter);
router.use(disciplineRouter);
router.use(teacherRouter);
if (process.env.NODE_ENV === "test") {
  router.use(e2eRouter);
}
export default router;
