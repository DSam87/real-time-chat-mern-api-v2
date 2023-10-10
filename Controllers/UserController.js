const User = require("../Models/User");

async function deleteUser(req, res, next) {
  const { id } = req.body;
  console.log("delete user");
  const deletedUser = await User.findByIdAndDelete(id);
  console.log(deletedUser);
  res.status(201).json(deletedUser);
}

module.exports = { deleteUser };
