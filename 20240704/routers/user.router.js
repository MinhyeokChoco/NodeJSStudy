const router = require("express").Router();
const container = require("../container/DI");

const userController = container.get("UserController");

router.get("/signup", (req, res) => res.render("signup"));
router.post("/signup", (req, res) => userController.signup(req, res));

router.get("/login", (req, res) => res.render("login"));
router.post("/login", (req, res) => userController.userLogin(req, res));

module.exports = router;