const dotenv = require('dotenv');

dotenv.config();

const environments = {
  PORT: process.env.PORT,
  MONGO_ATLAS_URI: process.env.MONGO_ATLAS_URI,
};

module.exports = environments;
