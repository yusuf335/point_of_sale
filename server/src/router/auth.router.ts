import { Router } from "express";
import {
  LoginController,
  SignupController,
  ForgotPasswordController,
} from "../controller/auth/auth.controller";

const router = Router();

// Route: /api/v1/auth/login
router.post("/login", LoginController);

// Route: /api/v1/auth/signup
router.post("/signup", SignupController);

// Route: /api/v1/auth/forgot-password
router.post("/forgot-password", ForgotPasswordController);

export default router;
