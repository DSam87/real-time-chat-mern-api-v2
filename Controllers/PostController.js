const Post = require("../Models/Post");

async function getAllPosts(req, res, next) {
  const allPosts = await Post.find();
  res.status(201).json(allPosts);
}

async function addPost(req, res, next) {
  const { text, postedBy } = req.body;
  if (!text || !postedBy) {
    return res.json({ message: "Input empty or need to re-login" });
  }
  const createdPost = await Post.create({ text, postedBy });
  console.log("Adding post");
  res.status(201).json({ message: "created post" + createdPost });
}

module.exports = { getAllPosts, addPost };
