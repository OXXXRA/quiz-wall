import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config";
import { JwtUser } from "./../types";

export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token)
      return res
        .status(401)
        .json({ status: "Error", message: "Not authorizated" });

    const decoded = jwt.verify(token, config.JWT_SECRET) as JwtUser;

    req.user = decoded;
    next();
  } catch (error) {
    res
      .status(401)
      .json({ status: "Error", message: "Sessison is expired", data: error });
  }
  next();
}
