import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { Op } from "sequelize";
import config from "../config";
import { User } from "../models/user";
import redis_client from "../redis_connect";
import jwtService from "../services/jwt.service";

export default {
  async register(req: Request, res: Response) {
    // encrypt password
    const { username, email, password } = req.body;
    try {
      const user = {
        username,
        email,
      };
      const newUser = await User.create(user);
      return res.json({
        status: "Ok",
        message: "Registred success",
        data: newUser,
      });
    } catch (error) {
      res.status(400).json({
        status: "Error",
        message: "Не получилось зарегистрировать",
        data: error,
      });
    }
  },
  async login(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({
        where: {
          [Op.or]: [{ username }, { email: username }],
        },
      });

      if (!user?.id || !user?.username) {
        return res.status(401).json({
          status: "Error",
          message: "Not valid email or password",
        });
      }

      const access_token = jwt.sign({ username }, config.JWT_SECRET, {
        expiresIn: "7d",
      });

      const refresh_token = jwtService.generateRefreshToken({
        username: user.username,
      });

      return res.json({
        status: "Ok",
        message: "Success",
        data: { access_token, refresh_token },
      });
    } catch (error) {
      res.status(401).json({
        status: "Error",
        message: "Not valid email or password",
        data: error,
      });
    }
  },

  async token(req: Request, res: Response) {
    const { username } = req.user || {};

    if (!username)
      return res.json({ status: "Error", message: "User is not log in" });

    const access_token = jwt.sign({ username }, config.JWT_SECRET, {
      expiresIn: "7d",
    });

    const refresh_token = jwtService.generateRefreshToken({ username });

    return res.json({
      status: "Ok",
      message: "Success",
      data: { access_token, refresh_token },
    });
  },

  async logout(req: Request, res: Response) {
    const { username } = req.user || {};

    if (!username)
      return res.json({ status: "Error", message: "User is not log in" });

    await redis_client.del(username.toString());

    // await redis_client.set('BL_' + username.toString(), token)

    return res.json({ status: "Ok", message: "Success" });
  },
};
