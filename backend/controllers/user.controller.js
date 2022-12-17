const service = require('../services/user.service');

const getUsers = async (req, res) => {
  try {
    const users = await service.getUsers();

    res.status(200).send(users);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await service.getById(id);

    res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const createUser = async (req, res) => {
  try {
    const { username, password, role } = req.body;

    await service.createUser({ username, password, role });

    res.sendStatus(201);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { username, role } = req.body;

    await service.updateUser(userId, { username, role });

    res.status(200).send('Updated successfully');
  } catch (err) {
    err.message === 'User not found'
      ? res.status(404).send(err.message)
      : res.status(400).send(err.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    await service.deleteUser(userId);

    res.status(200).send('Deleted successfully');
  } catch (err) {
    res.status(404).send(err.message);
  }
};

const getUserHistory = async (req, res) => {
  const { _id } = req.user;

  try {
    const history = await service.getUserHistory(_id.toString());

    res.status(200).send(history);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const getUserFavourites = async (req, res) => {
  const { userId } = req;

  try {
    const userFavourites = await service.getUserFavourites(userId);

    res.status(200).send(userFavourites);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const createUserFavourite = async (req, res) => {
  const { userId } = req;
  const { mediaId } = req.body;

  try {
    await service.createUserFavourite(userId, mediaId);

    res.sendStatus(201);
  } catch (err) {
    err.message === 'Media not found'
      ? res.status(404).send(err.message)
      : res.status(400).send(err.message);
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserHistory,
  getUserFavourites,
  createUserFavourite,
};
