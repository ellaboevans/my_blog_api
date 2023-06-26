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
},{
  timestamps: true,
});

module.exports = mongoose.model("Posts", BlogPost);
