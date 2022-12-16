const express = require('express');

const auth = require('../middlewares/auth.middleware');
const userController = require('../controllers/user.controller');
const { UserRoles } = require('../utils/constants');

const userRoute = express.Router();

userRoute.get('/users', auth([UserRoles.Admin]), userController.getUsers);
userRoute.post('/users', auth([UserRoles.Admin]), userController.createUser);
userRoute.put('/users/:id', auth([UserRoles.Admin]), userController.updateUser);
userRoute.delete(
  '/users/:id',
  auth([UserRoles.Admin]),
  userController.deleteUser
);

module.exports = userRoute;
