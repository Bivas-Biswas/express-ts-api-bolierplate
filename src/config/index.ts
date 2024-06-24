import 'dotenv/config';

const config = {
  node_env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || '4000',
  cors_origin: process.env.CORS_ORIGIN,
};

export default config;
