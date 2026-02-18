import express from "express";
import {
  registerUser,
  loginUser,
  addFavorite,
  getFavorites,
} from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.post("/favorites/:productId", protect, addFavorite);
router.get("/favorites", protect, getFavorites);

export default router;
