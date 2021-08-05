import express from "express";
import config from "./config";
import sequelize from "./config/sequelize";
import userRoutes from "./routes/user";

const app = express();

app.use(express.json());

app.use("/users", userRoutes);

async function main() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    sequelize.sync();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  app.listen(config.PORT, () => {
    console.log(`Server start on: localhost:${config.PORT}`);
  });
}

main();
