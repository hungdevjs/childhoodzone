const jsonwebtoken = require("jsonwebtoken");

const { randomString } = require("../utils/constants");

const login = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  if (!token) return res.status(404).send("No token");

  jsonwebtoken.verify(token, randomString, (err, decoded) => {
    if (err) return res.status(400).send("Invalid tokne");

    const { user } = decoded;

    req.user = user;

    next();
  });
};

module.exports = { login };
