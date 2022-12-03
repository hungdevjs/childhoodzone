const mongoose = require('mongoose');
const _ = require('lodash');

const { MediaTypes } = require('../utils/constants');

const Schema = mongoose.Schema;

const schema = new Schema({
  createdAt: { type: Number, required: true, default: () => Date.now() },
  name: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
  type: { type: String, required: true, enum: Object.values(MediaTypes) },
  images: [{ _id: false, type: String }],
  viewed: { type: Number, required: true, default: () => _.random(1, 100) },
  isPremium: { type: Boolean, required: true, default: false },
});

const Media = mongoose.model('Media', schema);

module.exports = Media;
