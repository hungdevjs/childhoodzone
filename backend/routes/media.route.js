const express = require("express");

const auth = require("../middlewares/auth.middleware");
const mediaController = require("../controllers/media.controller");
const { UserRoles } = require("../utils/constants");

const mediaRoute = express.Router();

mediaRoute.get("/medias", auth([UserRoles.Admin]), mediaController.getMedias);
mediaRoute.get(
  "/medias/popular",
  auth([UserRoles.Admin]),
  mediaController.getPopularMedias
);
mediaRoute.get(
  "/medias/:id",
  auth([UserRoles.Admin]),
  mediaController.getMediaById
);
mediaRoute.post(
  "/medias",
  auth([UserRoles.Admin]),
  mediaController.createMedia
);
mediaRoute.put(
  "/medias/:id",
  auth([UserRoles.Admin]),
  mediaController.updateMedia
);
mediaRoute.delete(
  "/medias/:id",
  auth([UserRoles.Admin]),
  mediaController.deleteMedia
);

module.exports = mediaRoute;
