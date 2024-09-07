import { Router } from "express";
import { methods as amigosController } from "../controllers/amigos.controller";

const router = Router();

router.get("/", amigosController.getFriends);

export default router;
