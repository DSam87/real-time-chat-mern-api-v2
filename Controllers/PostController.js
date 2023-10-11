const Post = require("../Models/Post");

async function getAllPosts(req, res, next) {
  const allPosts = await Post.find();
  res.status(201).json(allPosts);
}

async function addPost(req, res, next) {
  const { text, postedBy } = req.body;

  let username;
  
  if(postedBy){
     username = postedBy;
  }else{
     username = "Anon";

  }

  if (!text) {
    return res.json({ message: "Input empty or need to re-login" });
  }
  const createdPost = await Post.create({ text, postedBy: username });
  res.status(201).json({ message: "created post" + createdPost });
}

module.exports = { getAllPosts, addPost };
