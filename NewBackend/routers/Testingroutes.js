

const express = require("express");
const TestingControllers = require("../controllers/TestingControllers.js");
const route = express.Router();

route.get("/get-data", TestingControllers.fetchAll);

// POST new record
route.post("/post-data", TestingControllers.insertOne);


route.delete("/delete/:id", TestingControllers.removeOne);

route.put("/update/:id", TestingControllers.modifyOne);

module.exports = route