// const app = require('express')();

// 위와 아래가 똑같은 기능이다.
// require('express')로 가져오고 뒤에 괄호를 붙이면 바로 app 상수에게 반환해줌

// 서버 구축
const express = require('express');
// 파일 찾기
const fs = require('fs');
// 경로 찾기
const path = require('path');

const boardRouter = require("./routers/board.router");

// 서버 객체 생성
const app = express();

// 미들웨어 : 요청과 응답 전에 동작할 기능
app.use("/board", boardRouter);
// "/" 루트 경로에서 요청이 들어오는 경우
// /board : 루트에서 board라는 경로로 요청이 들어오는 경우

// 라우팅 처리
app.get("/", (req, res) => {
    // res.write("456");
    // res.write("456");
    // res.end("123");
    // end : 응답을 종료하고 기본적인 스트림을 다룰 때 사용

    // 헤더의 내용으로 정해진 컨텐츠 타입으로 보낼 때 사용하는 메서드
    // 문자열, 객체, 배열, 버퍼 등의 내용을 클라이언트에게 응답하면서 응답 종료
    // 기본 값이 html contentType이다.
    // res.send("{a:1}");

    // end와 send의 주요 차이
    // end : 스트리밍 응답이나 응답의 부분을 나눠서 보낼 때
    // send : 간단한 응답을 보낼 때 한번으로 응답 종료

    // __dirname : Macintosh HD/사용자/leeminhyeok/문서/MH/NodeJS/20240610/server.js
    // join : 문자열을 합쳐서 경로를 하나의 문자열로 반환
    const filePath = path.join(__dirname, "views", "index.html");
    // filePath : 
    fs.readFile(filePath, "utf8", (err, data) => {
        // res 응답의 헤더의 상태코드를 404로 할당
        if (err) return res.status(404).send("페이지를 로드하는데 오류 났어");
        res.send(data);
    })
})

// 클라이언트 서버는 없음, 브라우저가 그 역할을 대신 해주고 있음 (완벽하게 해주고 있는건 아님)
// 서버만 있음, 서버 측에서 페이지를 보여주는 역할까지 수행하고 있는 것 (서버 측에서 렌더링까지 수행하고 있음)
// 클라이언트를 보여주는 서버(정적 파일을 보여주는 서버)
// 객체나 DB 등의 데이터를 응답해주는 서버

// 서버에서 브라우저에 응답 메시지를 주는 것. / 리다이렉트가 될까 안될까 .. ? 정답은 안된다.
// 지금은 브라우저에 응답을 받고 있다.

// 서버 대기 상태
app.listen(3000, () => {
    console.log("server on~");
});