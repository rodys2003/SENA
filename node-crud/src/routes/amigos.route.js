import { Router } from "express";
import { methods as amigosController } from "../controllers/amigos.controller";

const router = Router();

router.get("/", amigosController.getFriends);
router.post("/", amigosController.addFriend);
router.get("/:id", amigosController.getFriend);
router.put("/:id", amigosController.updateFriend);
router.delete("/:id", amigosController.deleteFriend);

export default router;
