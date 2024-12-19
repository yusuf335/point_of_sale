import { RequestHandler } from "express";

export const LoginController: RequestHandler = async (
  req,
  res
): Promise<void> => {
  res.status(200).json({ message: "Login" });
};

export const SignupController: RequestHandler = async (
  req,
  res
): Promise<void> => {
  res.status(200).json({ message: "Signup" });
};

export const ForgotPasswordController: RequestHandler = async (
  req,
  res
): Promise<void> => {
  res.status(200).json({ message: "Forgot Password" });
};
