import { RequestHandler } from "express";

export const Login: RequestHandler = async (req, res): Promise<void> => {
  res.status(200).json({ message: "Login" });
};

export const Signup: RequestHandler = async (req, res): Promise<void> => {
  res.status(200).json({ message: "Signup" });
};

export const ForgotPassword: RequestHandler = async (
  req,
  res
): Promise<void> => {
  res.status(200).json({ message: "Forgot Password" });
};
