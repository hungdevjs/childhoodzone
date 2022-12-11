const express = require("express");

const authMiddleware = require("../middlewares/auth.middleware");
const mediaController = require("../controllers/media.controller");

const mediaRoute = express.Router();

mediaRoute.get("/media", authMiddleware.checkToken, mediaController.getMedia);
mediaRoute.post(
  "/media",
  authMiddleware.checkToken,
  mediaController.createMedia
);
mediaRoute.put(
  "/media/:id",
  authMiddleware.checkToken,
  mediaController.updateMedia
);
mediaRoute.delete(
  "/media/:id",
  authMiddleware.checkToken,
  mediaController.deleteMedia
);

module.exports = mediaRoute;
