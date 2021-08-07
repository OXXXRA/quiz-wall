import { Router } from "express";
import userController from "../controllers/user";

const router = Router();

router.get("/", userController.getAll);
router.get("/:id", userController.get);

router.put("/:id", userController.putUser);
router.delete("/:id", userController.deleteUser);

export default router;
