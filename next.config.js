// next.config.js
require('dotenv').config();
module.exports = {
  target: 'serverless',
  env: {
    API_KEY: process.env.API_KEY
  }
};
