import { User } from '../models/index';
import { Request, Response } from 'express'
import { any } from 'sequelize/types/lib/operators';
exports.create = (req: Request, res: Response) => {
  const newUser = {
    id: 0,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  User.create(newUser)
    .then(data => res.send(data))
    .catch(err => res.status(500).json(err))
}
exports.getAll = (req: Request, res: Response) => {
  User.findAll()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err))
};