import express, { Request, Response } from 'express';
import sequelize from './config/sequelize';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3030;


app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ msg: 'Good!' });
});

require("./routes/user")(app);

async function main() {

  // CONNECT TO DB
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
    sequelize.sync()
  } catch (error) {
    console.error('Unable to connect to the database:', error)

  }

  app.listen(port, () => {
    console.log(`Server start on: localhost:${port}`);
  });
}



main()
