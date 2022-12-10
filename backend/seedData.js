const mongoose = require("mongoose");
const passwordHash = require("password-hash");

const environments = require("./utils/environments");

const { MONGO_ATLAS_URI } = environments;

mongoose.connect(MONGO_ATLAS_URI, {
  autoIndex: true,
  autoCreate: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connected successfully");

  generateData();
});

const generateData = () => {
  const User = require("./models/user.model");
  const Media = require("./models/media.model");

  const { sampleUsers, sampleMedias } = require("./utils/sampleData");

  sampleUsers.map(async (user) => {
    const sampleUser = new User({
      _id: user._id,
      username: user.username,
      password: passwordHash.generate(user.password),
      role: user.role,
      history: [],
      liked: [],
    });

    await sampleUser.save();
  });

  sampleMedias.map(async (media) => {
    const sampleMedia = new Media({
      _id: media._id,
      name: media.name,
      description: media.description,
      url: media.url,
      type: media.type,
      images: [],
    });

    await sampleMedia.save();
  });
};
