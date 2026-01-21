exports.sendMail = (req, res) => {
  try {
    // Access decoded user info from middleware
    const user = req.user;

    res.status(200).json({
      message: "Mail sent successfully",
      user: user
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to send mail" });
  }
};
