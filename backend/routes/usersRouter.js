const express = require("express");

const router = express.Router();

const { createUser, updateUser, getUser } = require("../controllers/usersController");

router.post("/", createUser);

router.patch("/", updateUser);

router.get("/", getUser);

module.exports = router;
