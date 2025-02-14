var jwt = require("jsonwebtoken"); //JWT included for security
const User = require("../models/User");
const JWT_SECRET = "thisISveryImportant@forSecurity";

const fetchuser = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please authenticate with a valid token" });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(data.user.id).select("-password");
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate with a valid token" });
  }
};

module.exports = fetchuser;
