const path = require('path');
const postRouter = require('./routers/post')
const express = require('express');
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "page"));

// JSON 형식으로 바디 객체를 받겠다.
app.use(express.json());
// 깊은 복사 사용하지 않겠다.
app.use(express.urlencoded({ extended: false }));
// 정적 파일 라우팅, 매개변수로 첫 문자열 경로를 지정하지 않으면 / 루트 경로가 기본 설정값이다.
app.use(express.static(path.join(__dirname, "public")));

// / 루트 경로 요청일 때 처리할 미들웨어 작성
// 매개변수로 경로를 전달해주면 전달한 요청 경로가 들어온 경우에 이 라우터 처리를 하겠다.
app.use("/post", postRouter);
// /post, 라우터 요청 url

app.listen(PORT, () => {
    console.log("서버 켜졌음")
})