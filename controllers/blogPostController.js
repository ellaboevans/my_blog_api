const Posts = require("../models/Post");

// @desc Get all posts
// @route GET /api/posts
// @access Public

const getPosts = async (req, res) => {
  try {
    const posts = await Posts.find();
    if (!posts) return res.status(404).json({ message: "Posts not found" });
    res.status(200).send(posts);
  } catch (error) {
    console.log({ message: error });
  }
};

// @desc Get single post
// @route GET /api/posts/:id
// @access Public

const getSinglePost = async (req, res) => {
  const { id } = req.params;
  const post = await Posts.findById(id);
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.status(200).send(post);
};

// @desc Create a post
// @route POST /api/posts
// @access Public

const createPost = async (req, res) => {
  const { title, author, body } = req.body;
  const post = Posts.create({
    title,
    author,
    body,
  });
  try {
    if (!title || !author || !body)
      return res.status(400).json({ message: "Please fill all fields" });
    const savedPost = await post;
    res.status(201).json(savedPost);
  } catch (error) {
    console.log({ message: error });
  }
};

//@desc Update a post
//@route PATCH /api/posts/:id
//@access Public

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, author, body } = req.body;
  try {
    if (!title || !author || !body)
      return res.status(400).json({ message: "Please fill all fields" });
    const updatedPost = await Posts.updateOne(
      { _id: id },
      {
        $set: {
          title,
          author,
          body,
        },
      }
    );
    res.status(201).json(updatedPost);
  } catch (error) {
    console.log({ message: error });
  }
};

//@desc Delete a post
//@desc DELETE /api/posts/:id
//@access Public

const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const posts = await Posts.findById(id);
    if (!posts) return res.status(404).json({ message: "Post not found" });
    const deletedPost = await Posts.findByIdAndDelete(id);
    res.status(200).send(deletedPost);
  } catch (error) {
    console.log({ message: error });
  }
};

module.exports = {
  getPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
};
