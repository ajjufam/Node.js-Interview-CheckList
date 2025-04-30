const User = require("../models/users.model");
const UserSrevice = require("../services/users.service");

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ msg: "User created successfully", data: user });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Internal server error", error: error.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.find();
    if (!user || user.length == 0) {
      return res.status(404).json({ msg: "Users not found" });
    }
    res
      .status(200)
      .json({ msg: `${user.length} Users found successfully`, data: user });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Internal server error", error: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserSrevice.findUser(id);
    res.status(200).json({ msg: "User found successfully", data: user });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ msg: error.message || "Internal server error" });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserSrevice.findUser(id);
    const { name, email, age } = req.body || {};
    if (name) user.name = name;
    if (email) user.email = email;
    if (age) user.age = age;

    await user.save();
    res.status(200).json({ msg: "User updated successfully", data: user });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ msg: error.message || "Internal server error" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserSrevice.findUser(id);
    await User.findByIdAndDelete(id);

    res.status(200).json({ msg: "User deleted successfully", data: user });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ msg: error.message || "Internal server error" });
  }
};
