import jwt from "jsonwebtoken";

export const generateToken = (payload: {
  userId: number;
  role: string;
  isActive: boolean;
}) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
