import { Router } from "express";
import authController from "../controllers/auth";
import authMiddleware from "../middleware/auth";
import jwtService from "../services/jwt.service";

const router = Router();

router.post("/login", authController.login);
router.post("/register", authController.register);
router.post("/token", jwtService.verifyRefreshToken, authController.token);
router.post("/logout", authMiddleware, authController.logout);

export default router;
