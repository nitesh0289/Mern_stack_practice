const express = require("express");

const router = express.Router();

const { createUser, updateUser, getUser, loginUser } = require("../controllers/usersController");

router.post("/", createUser);

router.post("/login", loginUser);

router.patch("/", updateUser);

router.get("/", getUser);

module.exports = router;
