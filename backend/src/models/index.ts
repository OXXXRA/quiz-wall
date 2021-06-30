import sequelize from '../config/sequelize';
import { UserFactory } from './user';

// THIS ONES ARE THE ONES YOU NEED TO USE ON YOUR CONTROLLERS
export const User = UserFactory(sequelize)