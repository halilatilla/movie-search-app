// next.config.js
const withSass = require("@zeit/next-sass");
require("dotenv").config();
module.exports = withSass({
  env: {
    API_KEY: process.env.API_KEY,
  },
});
