const { User, validateUser } = require("../models/usersModels");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  const { error } = validateUser(req.body);

  if (error) {
    console.log({ error });
    return res.status(400).json({ error });
  }

  try {
    const user = new User(req.body);
    console.log({ user });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    if (!email || !password) res.status(400).json({ message: "Body is undefined!" });
    const userInfo = await User.findOne({ email });
    if (!userInfo) res.status(404).json({ message: "User is not registered!" });
    let isMatched = password === userInfo.password;
    if (!isMatched) res.status(401).json({ message: "Email or password is incorrect!" });
    //create JWT token
    const authToken = jwt.sign({ email }, "lovelyProfessionalUniversity");
    console.log({ authToken });
    //Send token via response
    res
      .status(200)
      .cookie("login_cred", authToken, { maxAge: 900000, httpOnly: true })
      .json({ token: authToken, message: `You're logged in successfully` });
    res.end();
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

module.exports = { createUser, updateUser, getUser, loginUser };
