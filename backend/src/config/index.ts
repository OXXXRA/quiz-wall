import dotenv from 'dotenv';

dotenv.config();

const env = (key: string, value: string): string => {
  return process.env[key] || value
}

export default {
  POSTGRES_USER: env('POSTGRES_USER', 'postgres'),
  POSTGRES_PASSWORD: env('POSTGRES_PASSWORD', 'password'),
  POSTGRES_DATABASE: env('POSTGRES_DATABASE', 'postgres'),
}

