const service = require("../services/user.service");

const getUsers = async (req, res) => {
  try {
    const { user } = req;
    if (user.role !== "Admin")
      return res.status(401).send("You don't have permission to do this");

    const users = await service.getUsers();

    res.status(200).send(users);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const createUser = async (req, res) => {
  try {
    const { user } = req;
    if (user.role !== "Admin")
      return res.status(401).send("You don't have permission to do this");

    const { username, password, role } = req.body;

    await service.createUser({ username, password, role });

    res.sendStatus(201);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const { user } = req;
    if (user.role !== "Admin")
      return res.status(401).send("You don't have permission to do this");

    const userId = req.params.id;
    const { username, password, role } = req.body;

    await service.updateUser({ userId, username, password, role });

    res.status(200).send("Updated successfully");
  } catch (err) {
    err.message === "User not found"
      ? res.status(404).send(err.message)
      : res.status(400).send(err.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { user } = req;
    if (user.role !== "Admin")
      return res.status(401).send("You don't have permission to do this");

    const userId = req.params.id;

    await service.deleteUser(userId);

    res.status(200).send("Deleted successfully");
  } catch (err) {
    res.status(404).send(err.message);
  }
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
