const express = require("express")
const router = express.Router()

const { generateToken } = require("../controllers/auth.controller")
const { sendMail } = require("../controllers/mail.controller")
const verifyToken = require("../middleware/verifyToken.middleware")

router.get("/login", generateToken)
router.get("/send-mail", verifyToken, sendMail)

module.exports = router
