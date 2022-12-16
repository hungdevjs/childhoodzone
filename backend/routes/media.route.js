const express = require('express');

const auth = require('../middlewares/auth.middleware');
const mediaController = require('../controllers/media.controller');
const { UserRoles } = require('../utils/constants');

const mediaRoute = express.Router();

mediaRoute.get(
  '/media',
  auth([UserRoles.Admin, UserRoles.PremiumUser, UserRoles.User]),
  mediaController.getMedia
);
mediaRoute.post('/media', auth([UserRoles.Admin]), mediaController.createMedia);
mediaRoute.put(
  '/media/:id',
  auth([UserRoles.Admin]),
  mediaController.updateMedia
);
mediaRoute.delete(
  '/media/:id',
  auth([UserRoles.Admin]),
  mediaController.deleteMedia
);

module.exports = mediaRoute;
