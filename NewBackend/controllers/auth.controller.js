const JWT = require("jsonwebtoken");

const JWT_SECRET = "!@#CCAfdv678678";

const generateToken = async (req, res) => {
  try {
    console.log(" /login API HIT");  

    const token = JWT.sign(
      { user_id: "11223344" },
      JWT_SECRET,
      { expiresIn: "10s" }   
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 10 * 1000
    });

    console.log(" Token created:", token);

    return res.status(200).json("Login successful");
  } catch (err) {
    console.error(" Login error:", err);
    return res.status(500).json(err);
  }
};

module.exports = { generateToken };
