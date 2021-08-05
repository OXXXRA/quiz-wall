import { Router } from "express";
const userController = require("../controllers/user");

const router = Router();

router.get("/", userController.getAll);
router.get("/:id", userController.get);

router.post("/", userController.create);
router.put("/:id", userController.putUser);
router.delete("/:id", userController.deleteUser);

export default router;
