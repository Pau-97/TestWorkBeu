import { Router } from "express";

export const router = Router();

import { router as ramdomRouter } from "./random.route";

router.use("/", ramdomRouter);

