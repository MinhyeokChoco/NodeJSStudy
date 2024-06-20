const router = require('express').Router();
const { login, signup } = require('../controllers/user.controllers');

router.get("/", (req, res) => {
    res.render("main");
})

router.get("/login", (req, res) => {
    res.render("login");
})

router.post("/login", async (req, res) => {
    const { uid, upw } = req.body;
    if (await login(uid, upw)) {
        res.cookie("token", await login(uid, upw), { httpOnly: "5m" });
    }
    res.redirect("/");
})

router.get("/signup", (req, res) => {
    res.render("signup");
})

router.post("/signup", async (req, res) => {
    const { uid, upw } = req.body;
    if (await signup(uid, upw)) {
        res.redirect("/login");
    } else res.send("회원 가입에 실패했습니다.")
})

module.exports = router;