import redis from "redis";
import config from "./config";

const redis_client = redis.createClient(config.REDIS_PORT, config.REDIS_HOST);

redis_client.on("connect", () => {
  console.log("Message from redis");
});

export default redis_client;
