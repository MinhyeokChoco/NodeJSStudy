// ejs 템플릿 엔진

// 템플릿 엔진 : 서버 측에서 html을 만들어서 응답해주는 것

// 이런 기법은 서버사이드 렌더링
// express에서 ejs를 많이 사용했었음
// express가 업데이트 되면서 ejs를 기본적으로 제공하게 됨.

// `${여기부터 js야}`
// <% js 코드 %> : 스크립트릿, 코드 실행

// <%= 변수의 내용 %> : 참조, html 수정, 변수를 삽입

// react next에서 도움이 된다.

// 파일을 다르게 가져오자. ejs
// 파일을 제공하는 경로를 설정할 수 있음
const express = require('express');
// ejs를 require 하는 구문이 있어서 설치를 해야 한다.
const app = express();
const path = require('path');
const POST = 3000;

// set : 서버 객체 안에 있는 내용을 수정하겠다.
console.log(app);

// 뷰 엔진을 ejs를 사용하겠다.
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs");

// Macintosh HD/사용자/leeminhyeok/문서/MH/NodeJS/20240610/ejs/server.js
// 파일을 찾는다. (변경도 가능)

console.log(app);

// 정적 파일 미들웨어로 추가
// public이라는 폴더를 찾아서 정적 라우팅 설정을 한다.
// app.use("./css", express.static("public"));
// /css/style.css
// /css === c/~/public
// app.use(express.static("public"));

const boardList = [
    { id: 1, name: "hyeok" },
    { id: 2, name: "soon" },
    { id: 3, name: "LKJ" },
    { id: 4, name: "LMH" }
]

const title = "페이지 제목";
app.get("/", (req, res) => {
    // res.send("Hi")
    // 페이지에서 변수를 사용해서 html 페이지를 완성시켜서 보여주고 싶어.
    // 문자열 파싱을 해서 스크립트 변수 내용을 포함한 완성된 html을 응답

    // render : view engine ejs를 사용할 때 페이지를 완성시켜서 응답
    // 문자열을 파싱해서 html을 완성 시켜서 최종적으로 만들어진 html을 응답

    // index라는 이름의 파일을 찾고 읽는다. <% js %> <%= %> 이런 문자열을 찾아서
    // 문자열의 코드를 실행, 만들어진 html을 응답
    // render ejs형식의 파일을 출력하기 위해서 사용
    res.render('index', { boardList });
})

// 서버 대기 상태
app.listen(POST, () => {
    console.log("server on~")
})

// 1번 실습
// 라우팅 처리를 하고 user/login, user/signup, user/info(mypage) 원래는 post 방식으로 해야 함
// board, board/list, board/write
// cart, cart/add

// 2번 실습
// 서버측에서 html 페이지를 완성 시켜서 보여주는데
// 게시판의 형태를 10개 정도 보여주기