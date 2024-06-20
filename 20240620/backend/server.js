const cors = require('cors');
const express = require('express');
const app = express();
const PORT = 4000;

app.use(cors({
    origin: "http://127.0.0.1:5500",
    methods: ["PUT", "DELETE"],
    credentials: true,
}))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/login", (req, res) => {
    const { uid, upw } = req.body;
    console.log(uid, upw);
    res.send(`아이디 : ${uid}, 비밀번호 : ${upw}`);
})

app.post("/signup", (req, res) => {
    const { uid, upw } = req.body;
    res.send(`아이디 : ${uid}, 비밀번호 : ${upw}`);
})

app.listen(PORT, () => {
    console.log("Back 서버 대기 중")
})