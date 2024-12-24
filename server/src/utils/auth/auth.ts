import { Request, Response, NextFunction } from "express";
import { verifyToken } from "./jwt";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token missing or invalid" });
  }

  try {
    const decoded = verifyToken(token) as {
      userId: number;
      role: string;
      isActive: boolean;
    };
    req.user = decoded; // Attach user info to the request
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
