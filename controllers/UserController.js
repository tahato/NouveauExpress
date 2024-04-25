const User = require("../models/User");
const bycrypt = require("bcryptjs");
exports.createUser = async (req, res) => {
  const { username, password, age } = req.body;
  try {
    const cryptedPsd = await bycrypt.hash(password);
    const user = await User.create({ username, password: cryptedPsd, age });
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.messsage });
  }
};
exports.getUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
exports.userUpdate = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
