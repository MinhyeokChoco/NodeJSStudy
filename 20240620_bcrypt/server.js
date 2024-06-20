const express = require('express');
const app = express();
const path = require('path');
const cookie = require('cookie-parser');
const router = require('./routers/user.routers');
const jwt = require('jsonwebtoken');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("views", path.join(__dirname, "page"));
app.set("view engine", "ejs");

app.use(cookie());
app.use(router);

app.listen(PORT, () => {
    console.log("서버 대기 중");
})

const data = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJtaW5oeWVvayIsImlhdCI6MTcxODg3NzMwNywiZXhwIjoxNzE4ODc3NDg3fQ.Obohw-Np7T-H0086P4rPeOYFeVh4BGVyIsfL-ViCy6I", "hyeok");
console.log(data);