const User = require("../models/DetailsModel");

// ADD
const addUser = async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
};

// GET
const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// DELETE
const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

// UPDATE
const updateUser = async (req, res) => {
  const updated = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};

module.exports = { addUser, getUsers, deleteUser, updateUser };
