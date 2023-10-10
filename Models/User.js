const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const { Schema } = require("mongoose");

const User = new Schema({
  username: String,
  email: String,
  password: String,
});

User.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("User", User);
