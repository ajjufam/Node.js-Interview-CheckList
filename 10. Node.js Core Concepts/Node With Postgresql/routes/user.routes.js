const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.post("/", userController.create);
router.get("/", userController.getAll);
router.get("/:id", userController.getById);
router.put("/:id", userController.update);
router.delete("/:id", userController.remove);

module.exports = router;
