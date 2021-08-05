import sequelize from "../config/sequelize";
import { UserFactory } from "./user";

export const User = UserFactory(sequelize);
