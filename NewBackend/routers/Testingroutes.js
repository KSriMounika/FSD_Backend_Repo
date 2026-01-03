const express = require("express");
const TestingApi = require ("../controllers/TestingControllers.js");
const router = express.Router();
router.get("/getdata", TestingApi);
module.exports = router;

