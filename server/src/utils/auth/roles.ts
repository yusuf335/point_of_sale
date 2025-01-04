import { Request, Response, NextFunction } from "express";

export const authorizeRoles = (role: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!role.includes(req.user.role)) {
      return res.status(403).json({ message: "Access denied" });
    }
    next();
  };
};
