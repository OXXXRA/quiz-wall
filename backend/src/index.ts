import express from "express";
import config from "./config";
import sequelize from "./config/sequelize";
import authRoutes from "./routes/auth";
import userRoutes from "./routes/user";

const app = express();

app.use(express.json());

app.use("/v1/users", userRoutes);
app.use("/v1/auth", authRoutes);

async function main() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    sequelize.sync();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  app.listen(config.PORT, () => {
    console.log(`Server start on: http://localhost:${config.PORT}`);
  });
}

main();
