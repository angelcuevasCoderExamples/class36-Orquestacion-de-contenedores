const userController = require("../controllers/user.controller.js");
const { Router } = require("express");
const router = Router();

router.post("/create", userController.createUser);
router.get("/", userController.getUsers);

module.exports = router; 
