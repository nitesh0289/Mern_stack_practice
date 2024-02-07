const { Blog, validateBlog } = require("../models/blogsModels");

const createBlog = async (req, res) => {
  const { error } = validateBlog(req.body);

  if (error) {
    console.log({ error });
    return res.status(400).json({ error });
  }

  try {
    const blog = new Blog(req.body);
    console.log({ user: blog });
    // await user.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateBlog = async (req, res) => {
  try {
    const blogInfo = Blog.findOne({ _id: req.body._id });
    const blog = new Blog({ ...blogInfo, ...req.body });
    console.log({ blog });
    // await user.save();
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBlog = (req, res) => {
  try {
    res.status(200).send("Blog found!");
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { createBlog, updateBlog, getBlog };
