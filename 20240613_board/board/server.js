const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const mysql = require('mysql2');

const mysqlConnect = mysql.createConnection({
    user: "root",
    password: "Dlalsgur1!",
    database: "board",
    multipleStatements: true
})

app.set("views", path.join(__dirname, "page"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
    console.log("서버 대기 상태")
})

// 메인 페이지
app.get("/", (req, res) => {
    res.render("board");
})

// 글 작성 (get 조회)
app.get("/write", (req, res) => {
    res.render("write")
})

// 글 작성 (post 추가)
app.post("/write", (req, res) => {
    const { title, content } = req.body;
    const writeSql = "INSERT INTO board (title, content, views) VALUES (?,?,?)";
    mysqlConnect.query(writeSql, [title, content, 0], () => {
        res.redirect("/list")
    });
})

// 글 조회 (get 조회)
app.get("/list", (req, res) => {
    mysqlConnect.query("SELECT * FROM board", (err, data) => {
        res.render("list", { data })
    });
})

// 글 수정 (put 수정)
app.get("/update/:id", (req, res) => {
    console.log(req.params.id);
    const id = req.params.id;
    const listClick = "SELECT * FROM board WHERE id = ?";
    mysqlConnect.query(listClick, [id], (err, [data]) => {
        res.render("update", { data, id });
    })
})

app.post("/update/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    const { title, content } = req.body;
    console.log(title, content);
    const updateSql = "UPDATE `board` SET `title` = ?, `content` = ? WHERE `id` = ?";
    mysqlConnect.query(updateSql, [title, content, id], (err) => {
        if (err)
            console.log(err)
        res.redirect("/list")
    })
})

// 글 삭제
const deleteSql = "DELETE FROM board WHERE id = ?;";
const deleteSql2 = "SET @CNT = 0; UPDATE board SET board.id = @CNT:=@CNT+1;";
const deleteSql3 = "ALTER TABLE board AUTO_INCREMENT = 0;";
const deleteSqlAll = deleteSql + deleteSql2 + deleteSql3;

app.get("/list/:id", (req, res) => {
    const id = req.params.id;
    mysqlConnect.query(deleteSqlAll, [id], (err) => {
        if (err)
            console.log("삭제할 로우를 찾지 못했어");
    })
    res.redirect("/list")
})