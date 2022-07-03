import express from "express";
import { verifyToken } from "../utils/tokenAuth.js";
import {register, login, verifyAccount, resetLink, googleLogin, facebookLogin, resetPassword, getAllUsers, getUserProfile, updateUserProfile, deleteAccount, finishTour } from "../controllers/user.js"
const router = express.Router();
router.get("/user-profile", verifyToken, getUserProfile)
router.get("/get-users", getAllUsers)
router.post("/register", register);
router.post("/google-login", googleLogin)
router.post("/facebook-login", facebookLogin)
router.post("/login", login);
router.get("/:id/verify/:token", verifyAccount);
router.post("/reset-link", resetLink);
router.post("/reset-password/:id", resetPassword);
router.put("/update-profile",verifyToken, updateUserProfile)
router.delete("/delete-account/:id", verifyToken, deleteAccount)
router.put("/finish-tour", verifyToken, finishTour)

export default router 