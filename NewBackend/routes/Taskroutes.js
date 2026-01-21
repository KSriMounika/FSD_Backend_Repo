const express = require("express");
const {
  addUser,
  getUsers,
  deleteUser,
  updateUser
} = require("../controllers/TaskController");

const router = express.Router();

router.post("/add", addUser);
router.get("/get", getUsers);
router.delete("/delete/:id", deleteUser);
router.put("/update/:id", updateUser);

module.exports = router;
