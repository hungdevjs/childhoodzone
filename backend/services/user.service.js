const passwordHash = require("password-hash");

const User = require("../models/user.model");
const { UserRoles } = require("../utils/constants");

const getUsers = async () => {
  const users = await User.find({}).select("-password").lean();

  return users || [];
};

const createUser = async (userInfor) => {
  const { username, password, role } = userInfor;

  if (!username.trim() || username.includes(" "))
    throw new Error("Username musn't be empty or blank");

  if (!password.trim() || password.includes(" "))
    throw new Error("Password musn't be empty or blank");

  if (username.length < 8 || password.length < 8)
    throw new Error("Username and password must have at least 8 characters");

  if (!Object.values(UserRoles).includes(role)) throw new Error("Invalid role");

  const existUser = await User.findOne({ username }).lean();
  if (existUser) throw new Error("User existed");

  const newUser = new User({
    username,
    password: passwordHash.generate(password),
    role,
    history: [],
    liked: [],
  });

  await newUser.save();
};

const updateUser = async (userInfor) => {
  const { userId, username, password, role } = userInfor;

  const user = await User.findOne({ _id: userId });
  if (!user) throw new Error("User not found");

  const userExist = await User.findOne({ username }).lean();
  if (userExist && userExist.username !== user.username)
    throw new Error("Username already exists");

  if (!username.trim() || username.includes(" "))
    throw new Error("Username musn't be empty or blank");

  if (!password.trim() || password.includes(" "))
    throw new Error("Password musn't be empty or blank");

  if (username.length < 8 || password.length < 8)
    throw new Error("Username and password must have at least 8 characters");

  if (!Object.values(UserRoles).includes(role)) throw new Error("Invalid role");

  const newUser = {
    username,
    password: passwordHash.generate(password),
    role,
  };

  await user.updateOne(newUser);
  await user.save();
};

const deleteUser = async (userId) => {
  const user = await User.findOne({ _id: userId });

  if (!user) throw new Error("User not found");

  await user.remove();
};

const getUserHistory = async (userId) => {
  const user = await User.findOne({ _id: userId }).lean();

  return user.history || [];
};

const getUserFavourites = async (userId) => {
  const user = await User.findOne({ _id: userId }).lean();

  const mediaIds = user.liked.map((media) => media.mediaId);

  const userFavourites = await Media.find({
    _id: { $in: mediaIds },
  }).lean();

  return userFavourites || [];
};

const createUserFavourite = async (userId, mediaId) => {
  const mediaExist = await Media.findOne({ _id: mediaId }).lean();
  if (!mediaExist) throw new Error("Media not found");

  const user = await User.findOne({ _id: userId });
  const userFavourites = user.liked;

  if (userFavourites.find((media) => media.mediaId === mediaId))
    throw new Error("Media existed");

  user.liked = [...user.liked, { mediaId }];

  await user.save();
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserHistory,
  getUserFavourites,
  createUserFavourite,
};
