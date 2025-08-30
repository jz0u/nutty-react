import { Router } from "express";
import usersRouter from "./usersRoutes.js";
import foodsRouter from "./foodsRoutes.js"

const router = Router();

router.use("/api/users",usersRouter)
router.use("/api/foods",foodsRouter)

export default router