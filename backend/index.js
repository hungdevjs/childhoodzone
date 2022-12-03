const express = require('express');
const cors = require('cors');

const environments = require('./utils/environments');

const { PORT, MONGO_ATLAS_URI } = environments;

const mongoose = require('mongoose');

mongoose.connect(MONGO_ATLAS_URI, {
  autoIndex: true,
  autoCreate: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connected successfully!');
  main();
});

const main = () => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get('/', (req, res) => {
    res.send('OK');
  });

  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
};
