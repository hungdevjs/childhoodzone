const Media = require("../models/media.model");

const { MediaTypes } = require("../utils/constants");

const getMedia = async () => {
  const media = await Media.find({});

  return media;
};

const createMedia = async (mediaInfor) => {
  const { name, description, url, type, images, viewed, isPremium } =
    mediaInfor;

  const mediaExist = await Media.findOne({ name });

  if (mediaExist) throw new Error("Media already exists");

  if (!name.trim()) throw new Error("Media name cannot be empty");

  if (!description.trim()) throw new Error("Media description cannot be empty");

  if (!url.trim()) throw new Error("Media url cannot be empty");

  if (!Object.values(MediaTypes).includes(type))
    throw new Error("Invalid media type");

  const media = new Media({
    name,
    description,
    url,
    type,
    images: images ? images : [],
    viewed,
    isPremium,
  });

  await media.save();
};

const updateMedia = async (mediaId, mediaInfor) => {
  const { name, description, url, type, images, viewed, isPremium } =
    mediaInfor;

  const media = await Media.findOne({ _id: mediaId });
  if (!media) throw new Error("Media not found");

  const mediaExist = await Media.findOne({ name }).lean();
  if (mediaExist && mediaExist._id.toString() !== mediaId)
    throw new Error("Media name already exists");

  if (!Object.values(MediaTypes).includes(type))
    throw new Error("Invalid media type");

  const newMedia = {
    name,
    description,
    url,
    type,
    images,
    viewed,
    isPremium,
  };

  await media.updateOne(newMedia);
  await media.save();
};

const deleteMedia = async (mediaId) => {
  const media = await Media.findOne({ _id: mediaId });

  if (!media) throw new Error("Media not found");

  await media.remove();
};

module.exports = {
  getMedia,
  createMedia,
  updateMedia,
  deleteMedia,
};
