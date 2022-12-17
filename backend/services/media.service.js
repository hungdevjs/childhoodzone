const Media = require("../models/media.model");

const { MediaTypes } = require("../utils/constants");

const getMedias = async () => {
  const media = await Media.find({}).lean();

  return media;
};

const getMediaById = async (mediaId) => {
  const media = await Media.findOne({ _id: mediaId });
  media.viewed += 1;

  await media.save();

  return media;
};

const createMedia = async (mediaInfor) => {
  const { name, description, url, type, images, viewed, isPremium } =
    mediaInfor;

  const mediaExist = await Media.findOne({ name }).lean();

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

const getPopularMedias = async () => {
  const bestMovie = await Media.find({ type: "Movie" })
    .sort({ viewed: -1 })
    .limit(1);
  const topViewMovies = await Media.find({ type: "Movie" })
    .sort({ viewed: -1 })
    .limit(4);
  const topRatingMovies = [];

  const bestComic = await Media.find({ type: "Comic" })
    .sort({ viewed: -1 })
    .limit(1);
  const topViewComics = await Media.find({ type: "Comic" })
    .sort({ viewed: -1 })
    .limit(4);
  const topRatingComics = [];

  return {
    movies: {
      ...bestMovie,
      topViews: topViewMovies,
      topRatings: topRatingMovies,
    },
    comics: {
      ...bestComic,
      topViews: topViewComics,
      topRatings: topRatingComics,
    },
  };
};

module.exports = {
  getMedias,
  getMediaById,
  createMedia,
  updateMedia,
  deleteMedia,
  getPopularMedias,
};
