const express = require("express");
const router = express.Router();
const {
  getPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/blogPostController");

// Get all posts
router.get("/", getPosts);

// Get single post
router.get("/:id", getSinglePost);

// Create a post
router.post("/", createPost);

// Upadate a post
router.patch("/:id", updatePost);

// Delete a post
router.delete("/:id", deletePost);

module.exports = router;
