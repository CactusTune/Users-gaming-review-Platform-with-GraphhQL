import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import JwtToken from "../Utils/jwt";

interface CustomRequest extends Request {
  isAuth?: boolean;
  userId?: string;
}

const authenticateToken = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    req.isAuth = false;
    return next();
  }

  const token = authHeader.split(" ")[1];

  if (!token || token === " ") {
    req.isAuth = false;
    return next();
  }

  let decodedToken: any;

  try {
    const jwtToken = new JwtToken("somesecret");
    decodedToken = jwtToken.verifyToken(token);
  } catch (err) {
    req.isAuth = false;
    return next();
  }

  if (!decodedToken) {
    req.isAuth = false;
    return next();
  }

  req.isAuth = true;
  req.userId = decodedToken.userId;
  next();
};

export default authenticateToken;
