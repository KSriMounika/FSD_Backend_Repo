const express = require('express')
const { SendMail } = require('../controllers/mailController')

const router = express.Router()

router.post('/send-mail', SendMail)

module.exports = router
