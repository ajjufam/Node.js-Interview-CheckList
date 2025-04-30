const express = require("express");
const router = express.Router();
const userController = require("../controllers/users.controller");

router.post("/create-user", userController.createUser);
router.get("/all-users", userController.getUser);
router.get("/user/:id", userController.getUserById);
router.put("/update-user/:id", userController.updateUser);
router.delete("/delete-user/:id", userController.deleteUser);

module.exports = router;
