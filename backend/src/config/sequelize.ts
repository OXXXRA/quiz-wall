import { Sequelize } from 'sequelize'
import config from '.'

const sequelize = new Sequelize({
  dialect: "postgres",
  password: config.POSTGRES_PASSWORD,
  username: config.POSTGRES_USER,
  database: config.POSTGRES_DATABASE,
  pool: {
    min: 0,
    max: 5,
    acquire: 30000,
    idle: 10000,
  },
})

export default sequelize