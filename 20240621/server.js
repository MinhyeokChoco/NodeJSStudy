const webSocket = require("ws");

const wss = new webSocket.Server({port: 3000});

// connection 클라이언트가 접속 요청을 했을 때
wss.on("connection", (socket) => {
    console.log("클라이언트 연결");
    // 서버 측에서 클라이언트에게 요청을 받고
    // message라는 이벤트 명이면 콜백함수 호출
    // on : 이벤트에 콜백함수로 등록
    // emit : 이벤트 호출
    // console.log(socket);
    socket.on("message", (msg) => {
        console.log(msg.toString());
        wss.clients.forEach((client)=>{
            client.send(msg.toString());
        })
    });

    socket.on("close", () => {
        console.log("클라이언트 연결 종료");
    });
})