const jsonwebtoken = require("jsonwebtoken");
const environments = require("../utils/environments");

const { JWT_SECRET_KEY } = environments;

const login = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  if (!token) return res.status(404).send("No token");

  jsonwebtoken.verify(token, JWT_SECRET_KEY, (err, decoded) => {
    if (err) return res.status(400).send("Invalid tokne");

    const { user } = decoded;

    req.user = user;

    next();
  });
};

module.exports = { login };
