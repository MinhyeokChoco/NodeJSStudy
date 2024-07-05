const router = require('express').Router();
const container = require("../container/DI")

const userController = container.get("UserController");
const postController = container.get("PostController");

// router.get("/view", (req, res) => postController.findPostAll(req, res));
router.get("/users", (req, res) => userController.getUser(req, res));
router.post("/createUser", userController.signup);

module.exports = router;