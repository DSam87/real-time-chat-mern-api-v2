const mongoose = require("mongoose");
const { Schema } = mongoose;

const Post = new Schema(
  {
    text: String,
    postedBy: String,
    time: { type: Date, default: Date.now },
    postedDate: String,
    postedTime: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", Post);
