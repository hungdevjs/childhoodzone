const mongoose = require('mongoose');

const { UserRoles } = require('../utils/constants');

const Schema = mongoose.Schema;

const schema = new Schema({
  createdAt: { type: Number, required: true, default: () => Date.now() },
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: Object.values(UserRoles) },
  history: [
    {
      time: { type: Number, required: true, default: () => Date.now() },
      mediaId: { type: String, required: true },
    },
  ],
  liked: [
    {
      time: { type: Number, required: true, default: () => Date.now() },
      mediaId: { type: String, required: true },
    },
  ],
});

const User = mongoose.model('User', schema);

module.exports = User;
