const express = require("express");

const authMiddleware = require("../middlewares/auth.middleware");
const userController = require("../controllers/user.controller");

const userRoute = express.Router();

userRoute.get("/users", authMiddleware.checkToken, userController.getUsers);
userRoute.post("/users", authMiddleware.checkToken, userController.createUser);
userRoute.put(
  "/users/:id",
  authMiddleware.checkToken,
  userController.updateUser
);
userRoute.delete(
  "/users/:id",
  authMiddleware.checkToken,
  userController.deleteUser
);

module.exports = userRoute;
