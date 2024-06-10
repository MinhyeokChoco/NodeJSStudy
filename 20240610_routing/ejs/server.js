const express = require('express');
const app = express();

const fs = require('fs');
const path = require('path');

const PORT = 3000;

app.set("views", __dirname);
app.set("view engine", "ejs");

const title = "랭킹 순위";

const rankList = [
    { id: "ranking", name: "순위" },
    { id: 1, name: "김기현" },
    { id: 2, name: "이준혁" },
    { id: 3, name: "박준후" },
    { id: 4, name: "이종석" },
    { id: 5, name: "안중현" },
    { id: 6, name: "최진우" },
    { id: 7, name: "강태욱" },
    { id: 8, name: "김민지" },
    { id: 9, name: "이경재" },
    { id: 10, name: "이민혁" }
]

app.get("/", (req, res) => {
    res.render('traning', { title, rankList });
})

app.listen(PORT, () => {
    console.log("server on~")
})