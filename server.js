const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv/config");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello, welcome to 0xConcept blog API" });
});

// Import Routes
const postsRoute = require("./routes/posts");
app.use("/api/posts", postsRoute);

// ConnectionDB
const connectDb = require("./config/connectionDb");
connectDb();

// Server listening
const port = process.env.PORT || 3500;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
