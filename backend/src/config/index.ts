import dotenv from "dotenv";

dotenv.config();

const env = <T>(key: string, value: T) => {
  return (process.env[key] || value) as T;
};

export default {
  PORT: env("PORT", 5000),
  JWT_SECRET: env("JWT_SECRET", "secrest"),
  JWT_REFRESH_SECRET: env("JWT_REFRESH_SECRET", "secrest_refresh"),
  POSTGRES_USER: env("POSTGRES_USER", "postgres"),
  POSTGRES_PASSWORD: env("POSTGRES_PASSWORD", "password"),
  POSTGRES_DATABASE: env("POSTGRES_DATABASE", "postgres"),
  REDIS_HOST: env("REDIS_HOST", ""),
  REDIS_PORT: env("REDIS_PORT", 6379),
};
