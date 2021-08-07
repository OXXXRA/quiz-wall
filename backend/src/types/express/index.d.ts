import {Express, Request} from "express";

type JwtUser = {
  id: Number;
  username: String;
};

declare global {
  namespace Express {
    interface Request {
      user?: Record<string, any>;
    }
  }
}
