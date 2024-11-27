import { config as conf } from "dotenv";
conf();

const _config = {
  port: process.env.SERVER_PORT,
  databaseUrl: process.env.MONGO_URI,
};

const config = Object.freeze(_config);

export default config;