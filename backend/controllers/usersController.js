const { User, validateUser } = require("../models/usersModels");

const createUser = async (req, res) => {
  const { error } = validateUser(req.body);

  if (error) {
    console.log({ error });
    return res.status(400).json({ error });
  }

  try {
    const user = new User(req.body);
    console.log({ user });
    // await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const userInfo = User.findOne({ _id: req.body._id });
    const user = new User({ ...userInfo, ...req.body });
    console.log({ user });
    // await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUser = (req, res) => {
  try {
    res.status(200).send("User found!");
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { createUser, updateUser, getUser };
