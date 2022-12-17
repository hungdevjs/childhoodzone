const service = require("../services/media.service");

const getMedias = async (req, res) => {
  try {
    const media = await service.getMedias();

    res.status(200).send(media);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const getMediaById = async (req, res) => {
  try {
    const mediaId = req.params.id;

    const media = await service.getMediaById(mediaId);

    res.status(200).send(media);
  } catch (err) {
    res.status(404).send(err.message);
  }
};

const createMedia = async (req, res) => {
  try {
    const { name, description, url, type, images, viewed, isPremium } =
      req.body;

    await service.createMedia({
      name,
      description,
      url,
      type,
      images,
      viewed,
      isPremium,
    });

    res.sendStatus(201);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const updateMedia = async (req, res) => {
  try {
    const mediaId = req.params.id;
    const { name, description, url, type, images, viewed, isPremium } =
      req.body;

    await service.updateMedia(mediaId, {
      name,
      description,
      url,
      type,
      images,
      viewed,
      isPremium,
    });

    res.status(200).send("Updated media successfully");
  } catch (err) {
    err.message === "Media not found"
      ? res.status(404).send(err.message)
      : res.status(400).send(err.message);
  }
};

const deleteMedia = async (req, res) => {
  try {
    const mediaId = req.params.id;

    await service.deleteMedia(mediaId);

    res.status(200).send("Deleted media successfully");
  } catch (err) {
    res.sendStatus(404);
  }
};

const getPopularMedias = async (req, res) => {
  try {
    const popularMedias = await service.getPopularMedias();

    res.status(200).send(popularMedias);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = {
  getMedias,
  getMediaById,
  createMedia,
  updateMedia,
  deleteMedia,
  getPopularMedias,
};
