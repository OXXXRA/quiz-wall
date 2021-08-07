import { error } from "console";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config";
import redis_client from "../redis_connect";
import { JwtUser } from "./../types";

type Token = {
  username: String;
};

export default {
  generateRefreshToken({ username }: Token) {
    const token = jwt.sign({ username }, config.JWT_REFRESH_SECRET, {
      expiresIn: "14d",
    });

    redis_client.get(username.toString(), (error) => {
      if (error) throw error;

      redis_client.set(username.toString(), JSON.stringify({ token }));
    });

    return token;
  },

  verifyRefreshToken(req: Request, res: Response, next: NextFunction) {
    const { token } = req.body;

    if (!token)
      return res
        .status(401)
        .json({ status: "Error", message: "Token not provided", data: error });

    try {
      const decoded = jwt.verify(token, config.JWT_REFRESH_SECRET) as JwtUser;

      req.user = decoded;

      redis_client.get(decoded.username.toString(), (error, data) => {
        if (error) throw error;

        if (data === null)
          return res.status(401).json({
            status: "Error",
            message: "Token is expired",
            data: error,
          });

        if (JSON.parse(data).token !== token)
          return res.status(401).json({
            status: "Error",
            message: "Token is invalid",
            data: error,
          });
      });

      next();
    } catch (error) {
      return res.status(401).json({
        status: "Error",
        message: "Session is invalid",
        data: error,
      });
    }
  },
};
