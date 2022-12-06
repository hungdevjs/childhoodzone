const express = require("express");
const cors = require("cors");

const environments = require("./utils/environments");

const { PORT, MONGO_ATLAS_URI } = environments;

const mongoose = require("mongoose");

mongoose.connect(MONGO_ATLAS_URI, {
  autoIndex: true,
  autoCreate: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connected successfully!");
  main();
});

const main = () => {
  const app = express();

  const authRoute = require("./routes/auth.route");
  const userRoute = require("./routes/user.route");
  const mediaRoute = require("./routes/media.route");

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(authRoute);
  app.use(userRoute);
  app.use(mediaRoute);

  app.get("/", (req, res) => {
    res.send("OK");
  });

  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
};
