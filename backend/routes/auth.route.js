import express from "express";
import {
  login,
  logout,
  signup,
  updateProfile,
  checkAuth,
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/check-auth", verifyToken, checkAuth);

router.put("/update-profile", verifyToken, updateProfile);

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;