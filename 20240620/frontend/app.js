const cookie = require('cookie-parser');
const path = require('path');
const axios = require('axios');
const express = require('express');
const app = express();
const PORT = 3000;

app.use(cookie());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("views", path.join(__dirname, "page"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("main");
})

app.get("/login", (req, res) => {
    res.render("login");
})

app.get("/signup", (req, res) => {
    res.render("signup")
})

app.post("/login", async (req, res) => {
    const { uid, upw } = req.body;
    const data = await axios.post("http://localhost:4000/login", { uid, upw });
    console.log(data);
    res.send(`아이디 : ${uid}, 비밀번호 : ${upw}`);
})

app.post("/signup", (req, res) => {
    const { uid, upw } = req.body;
    res.send(`아이디 : ${uid}, 비밀번호 : ${upw}`);
})

app.listen(PORT, () => {
    console.log("Front 서버 대기 중");
})

// send : 문자열로 전달해야함
// render의 정확한 뜻 : location.href("link"), a href("link")
// main.ejs : a 링크 차이점 여쭤보기