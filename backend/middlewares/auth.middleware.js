const jwt = require("jsonwebtoken");
const environments = require("../utils/environments");

const { JWT_SECRET_KEY } = environments;

const auth = (roles) => (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) return res.status(404).send("No token");

    jwt.verify(token, JWT_SECRET_KEY);

    const user = jwt.decode(token);

    if (roles) {
      if (!roles.includes(user.role)) throw new Error("Bad credential");
    }

    req.userId = user._id;

    next();
  } catch (err) {
    return res.sendStatus(401);
  }
};

module.exports = auth;
