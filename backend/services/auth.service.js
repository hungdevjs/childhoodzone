const jsonwebtoken = require("jsonwebtoken");
const passwordHash = require("password-hash");

const User = require("../models/user.model");

const { JWT_SECRET_KEY } = require("../utils/environments");

const login = async (username, password) => {
  console.log(JWT_SECRET_KEY);

  const userExist = await User.findOne({ username });
  if (!userExist) throw new Error("Unauthorized");

  const isPassed = passwordHash.verify(password, userExist.password);
  if (!isPassed) throw new Error("Invalid password");

  return jsonwebtoken.sign({ user: userExist }, JWT_SECRET_KEY, {
    expiresIn: "2d",
  });
};

const register = async (username, password, confirmedPassword) => {
  if (!username.trim() || username.includes(" "))
    throw new Error("Username musn't be empty or blank");

  if (!password.trim() || password.includes(" "))
    throw new Error("Password musn't be empty or blank");

  if (username.length < 8 || password.length < 8)
    throw new Error("Username and password must have at least 8 characters");

  if (password !== confirmedPassword)
    throw new Error("Password does not match");

  const user = new User({
    username,
    password: passwordHash.generate(password),
    role: "User",
    history: [],
    liked: [],
  });

  await user.save();
};

module.exports = {
  login,
  register,
};
