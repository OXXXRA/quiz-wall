import { Request, Response } from "express";
import { User } from "../db/models/user";

export default {
  getAll(req: Request, res: Response) {
    User.findAll()
      .then((data) => res.status(200).json(data))
      .catch((err) => res.status(500).json(err));
  },
  get(req: Request, res: Response) {
    const id = req.params.id;
    User.findByPk(id)
      .then((data) => res.status(200).json(data))
      .catch((err) => res.status(500).json(err));
  },
  deleteUser(req: Request, res: Response) {
    const id = req.params.id;
    User.destroy({
      where: { id: id },
    })
      .then(() => res.status(200).json("Запись успешно удалена"))
      .catch((err) => res.status(500).json(err));
  },
  putUser(req: Request, res: Response) {
    const id = req.params.id;
    User.update(req.body, {
      where: { id: id },
    })
      .then((data) => res.status(200).json(data))
      .catch((err) => res.status(500).json(err));
  },
};
