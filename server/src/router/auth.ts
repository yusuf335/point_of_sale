import { Router } from "express";
import { Login, Signup, ForgotPassword } from "../controller/auth/auth";

const router = Router();

// Route: /api/v1/auth/login
router.post("/login", Login);

// Route: /api/v1/auth/signup
router.post("/signup", Signup);

// Route: /api/v1/auth/forgot-password
router.post("/forgot-password", ForgotPassword);

export default router;
