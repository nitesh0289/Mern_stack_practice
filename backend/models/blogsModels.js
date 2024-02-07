const mongoose = require("mongoose");
const Joi = require("joi");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  images: { type: Array, required: true },
  userId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

const validateBlog = (blog) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    images: Joi.array().required(),
  });

  return schema.validate(blog);
};

const Blog = mongoose.model("Blog", blogSchema);

module.exports = { Blog, validateUser: validateBlog };
