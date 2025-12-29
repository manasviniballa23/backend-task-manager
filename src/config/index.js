require('dotenv').config();

const config = {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
};

if (!config.port) {
  throw new Error('PORT is missing in env');
}

module.exports = config;