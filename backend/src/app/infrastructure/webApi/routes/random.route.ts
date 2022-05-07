import { Router } from "express";
import { randomController } from "../controllers/random.controller";
import { apiKeyValidate } from "../middlewares";
export const router = Router();

router.get("/", apiKeyValidate, randomController.getRandom);

