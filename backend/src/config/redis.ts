const redis = require('redis');
const redisClient = redis.createClient(6379,'127.0.0.1');

redisClient.on('error', (e: any) => console.log(e));
redisClient.on('connect', () => console.log('redis has connected'));

export default redisClient;
