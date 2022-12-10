const service = require("../services/auth.service");

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const token = await service.login(username, password);

    res.status(200).send({ token });
  } catch (err) {
    res.status(401).send(err.message);
  }
};

const register = async (req, res) => {
  try {
    const { username, password, confirmedPassword } = req.body;

    await service.register(username, password, confirmedPassword);

    res.status(201).send("Registered successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = {
  login,
  register,
};
