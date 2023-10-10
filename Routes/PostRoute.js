const router = require("express").Router();
const PostController = require("../Controllers/PostController");

router
  .get("/posts", PostController.getAllPosts)
  .post("/post", PostController.addPost);

module.exports = router;
