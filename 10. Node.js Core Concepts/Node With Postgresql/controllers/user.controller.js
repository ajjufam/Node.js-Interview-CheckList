const userModel = require("../models/user.model");

exports.create = async (req, res, next) => {
  try {
    const { fname, lname, email } = req.body;
    const user = await userModel.createUSer(fname, lname, email);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const user = await userModel.getUserById(req.params.id);
    if (!user) return res.status(404).json({ msg: "user not found" });
    res.json(user);
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { fname, lname, email } = req.body;
    const user = await userModel.updateUser(req.params.id, fname, lname, email);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const user = await userModel.deleteUser(req.params.id);
    res.status(204).send().json(user);
  } catch (error) {
    next(error);
  }
};
