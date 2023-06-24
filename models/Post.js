const mongoose = require("mongoose");

const BlogPost = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  body: {
    type: String,
  },
});

module.exports = mongoose.model("Posts", BlogPost);
