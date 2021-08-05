import dotenv from "dotenv";

dotenv.config();

const env = <T>(key: string, value: T) => {
  return process.env[key] || value;
};

export default {
  PORT: env("PORT", 3000),
  POSTGRES_USER: env("POSTGRES_USER", "postgres"),
  POSTGRES_PASSWORD: env("POSTGRES_PASSWORD", "password"),
  POSTGRES_DATABASE: env("POSTGRES_DATABASE", "postgres"),
};
