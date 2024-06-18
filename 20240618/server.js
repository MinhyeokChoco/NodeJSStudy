const express = require('express');
const app = express();

const PORT = 3000;

const path = require('path');
const jwt = require('jsonwebtoken');
// cookie-parser
const cookie = require('cookie-parser');
require('dotenv').config();

// process 객체에 env 키에 우리가 작성한 내용이 키와 값으로 할당된다.
console.log(process.env.KEY);
// .env 파일은 올리면 안되고 만약 올려야 한다면 빌드를 해서 올리거나 환경변수 지정하는 페이지에서 값을 적어주면 된다.

app.set("views", path.join(__dirname, "page"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookie());

function tokenMiddleWare(req, res, next) {
    const token = req.cookies.token;
    if (!token) return res.send("유효하지 않은 유저")
    req.user = token;
    next();
}

app.listen(PORT, () => {
    console.log("서버 대기");
})

app.get("/", (req, res) => {
    res.render("login")
})

const user = {
    uid: "hyeok",
    password: "123"
}

app.get("/board", tokenMiddleWare, (req, res) => {
    res.send(`board page ${req.user.name}`)
})

app.post("/login", (req, res) => {
    // uid 키를 user_id라는 이름으로 사용하고 싶을 때 설정
    const { uid: user_id, upw: user_password } = req.body;
    if ((user_id == user.uid) && (user_password == user.password)) {
        const { KEY } = process.env;
        // json web token을 발급할 때 비밀 키를 넣어서 만들어 줄 것.
        // payload 값도 복원하고 검증을 하기 위해선 KEY 값이 있어야 한다.
        let token = jwt.sign({
            type: "JWT",
            // 유저 이름
            name: "hyeok"
        }, KEY, {
            // 토큰 유지 시간
            // expires = 만료라는 뜻
            expiresIn: "5m",
            // issuer = 발행자라는 뜻
            issuer: "발급자"
        });
        console.log(token);
        // verify 토큰을 검증 하고 payload 값을 복호화
        const data = jwt.verify(token, KEY);
        console.log(data);
        // 단순 쿠키로 저장을 할 것.
        // httpOnly : http 요청과 응답으로만 제어 가능, 자바스크립트 측에서 접근과 제어 불가능, 클라이언트는 접근 불가, 서버에서만 접근 가능
        res.cookie("token", data, { httpOnly: true })
        res.redirect("/");
    } else {
        res.redirect("/");
    }
})

// 순서, 미들웨어 여쭤보기
// process 객체와 promise 객체
// express 여쭤보기
// iat가 뭔 지 여쭤보기
// .env에 뭘 적는지 여쭤보기, 완료(사용할 환경 변수를 적어놓는 것, 환경 변수 저장)
// user key 값과 login.ejs name 값 물어보기, 완료(내가 이해한게 맞음)
// node server.js 했을 때 어떻게 해시값이 나오게 됐는지 console.log(token) 까지만. 완료(로그인 시도 하면 해시값 뜸)
// jsonwebtoken 이라는 기본 내장 모듈 안에 verify 라는 기본 내장 메서드가 있다. verify 역할은 발급받은 토큰이 제대로 만들어진 토큰인지 확인해주는 메소드이다. 완료