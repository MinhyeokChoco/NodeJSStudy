const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const mysql2 = require("mysql2");

const mysqlConnect = mysql2.createConnection({
    user: "root",
    password: "Dlalsgur1!",
    database: "test",
    multipleStatements: true
})

app.set("views", path.join(__dirname, "page"));
// views는 app 이라는 서버 객체에 고정 키 값이고 뒤에 path.join으로 문자열들을 합쳐줌으로써 값으로 경로를 넣어줌
app.set("view engine", "ejs");
// view engine이라는 키 값에 ejs라는 모듈을 사용

// body의 문자열 내용을 파싱해서 요청 객체에 body 키에 문자열을 파싱해서 객체를 할당해준다.
app.use(express.json());
// 객체를 파싱해서 사용할 것이다.
app.use(express.urlencoded({ extended: false }));
// 깊은 복사를 사용 안할 것이다.

app.listen(PORT, () => {
    console.log("서버 대기 상태");
})

app.get("/", (req, res) => {
    res.render("main");
})

app.get("/list", (req, res) => {
    mysqlConnect.query("SELECT * FROM products", (err, data) => {
        console.log(data);
        res.render("list", { data })
    });
})

app.get("/list/:name", (req, res) => {
    // id 키, 위에 id를 name으로 바꾸면 name이 키가 됩니다.
    // name 키 값 요청, url에 값이 value로 할당
    // list/1 == {name : 1}
    console.log(req.params);
}) // params 값으로 들어온다.

app.get("/insert", (req, res) => {
    res.render("insert")
})

// { name: '123', number: '456' }
app.post("/insert", (req, res) => {
    const { name, number } = req.body;
    const insertSql = "INSERT INTO products (name, number) VALUES (?,?)";
    mysqlConnect.query(insertSql, [name, number], () => {
        res.redirect('/list');
    });
})

// redirect() : 서버에 요청을 보냈는데 응답 받고 다시 요청을 보내는 것

// 중복되는 모듈들을 줄여줄 수 있는 모노래포

// 제목 내용 조회수
// update, delete