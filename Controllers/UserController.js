const User = require("../Models/User");

async function deleteUser(req, res, next) {
  const { id } = req.body;
  const deletedUser = await User.findByIdAndDelete(id);
  res.status(201).json(deletedUser);
}

module.exports = { deleteUser };
