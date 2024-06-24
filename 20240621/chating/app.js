// 채팅방
// 버스 좌석 예약

const express = require("express");
const path = require("path");
const socketio = require("socket.io");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "page"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const server = app.listen(3000, ()=>{
    console.log("서버 열림");
})

app.get("/", (req, res) => {
    res.render("main");
})

app.get("/chating", (req, res) => {
    res.render("main2");
})

// web socket 프로토콜 객체 생성
const io = socketio(server);
let users = [];
io.on("connection", (socket) => {
    // console.log(socket);
    users.push(socket.id);
    console.log(users);
    console.log("클리이언트 접속");

    // 서버 측 web socket 이벤트 명이 같은지 확인하고 핸들러 함수를 호출한다.
    socket.on("serverWhisper", ({id, msg}) => {
        // console.log(id, msg);
        // to : 클라이언트 중에서 누구에게 보낼 이벤트인지.
        io.sockets.to(id).emit("whisper", msg);
    })

    socket.on("joinRoom", (room, name) => {
        // id처럼 고유 해시값을 받게 된다.
        // 나만 표현하는 내 id와 다르게 해당 방의 고유 해시값
        socket.join(room);
        // 어느 방에 접속했는지 그 방에 있는 사람들에게 브로드 캐스팅
        io.to(room).emit("joinRoom", room, name);
    })

    socket.on("leaveRoom", (room, name) => {
        socket.leave(room);
        io.to(room).emit("leaveRoom", room, name);
    })

    socket.on("chat", (room, name, msg) => {
        io.to(room).emit("chat", name, msg);
    })

    socket.on("quiet", (room, receiver, name, msg) => {
        socket.join(receiver);
        io.to(receiver).emit("quiet", room, name, msg);
    })

    socket.on("disconnect", ()=>{
        users = users.filter((value) => value != socket.id);
        console.log(users);
    })
})