const JWT = require("jsonwebtoken");

const JWT_SECRET = "!@#CCAfdv678678";

module.exports = function verifyToken(req, res, next) {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Token missing" });
    }

    const decoded = JWT.verify(token, JWT_SECRET);
    req.user = decoded;

    next(); // allow request to continue
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
