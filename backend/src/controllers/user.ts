import { Request, Response } from "express";
import { User } from "../models/index";

export default {};

exports.create = (req: Request, res: Response) => {
  const newUser = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  User.create(newUser)
    .then((data) => res.send(data))
    .catch((err) => res.status(500).json(err));
};

exports.getAll = (req: Request, res: Response) => {
  User.findAll()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json(err));
};

exports.get = (req: Request, res: Response) => {
  const id = req.params.id;
  User.findByPk(id)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json(err));
};

exports.deleteUser = (req: Request, res: Response) => {
  const id = req.params.id;
  User.destroy({
    where: { id: id },
  })
    .then(() => res.status(200).json("Запись успешно удалена"))
    .catch((err) => res.status(500).json(err));
};

exports.putUser = (req: Request, res: Response) => {
  const id = req.params.id;
  User.update(req.body, {
    where: { id: id },
  })
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json(err));
};
