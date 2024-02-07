const express = require("express");

const route = express.Router();

route.get("/", getUser);

module.exports = route;
