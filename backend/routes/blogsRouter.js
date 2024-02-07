const express = require("express");

const router = express.Router();

const { createBlog, updateBlog, getBlog } = require("../controllers/blogsRouter");

router.post("/", createBlog);
router.patch("/", updateBlog);

router.get("/", getBlog);

module.exports = router;
