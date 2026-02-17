import Redis from 'ioredis';

const redis = new Redis(
  "redis://:redis-server%40321@srv-captain--redis:6379"
);

export { redis as r };
