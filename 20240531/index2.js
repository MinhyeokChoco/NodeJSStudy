// SYN = 싱크로나이즈
// ACK = 컴퓨팅에서 ACK, 응답 문자, 승인 코드(acknowledgement code)는
// 승인을 서명하거나, 응답을 보내기 위해, 통신 프로토콜의 일부로서 통신 프로세서나 컴퓨터 사이를 지나가는 신호이다.

// HTTP 프로토콜
// HTTP 요청을 보내게 되면

// TCP 3-way-handshaking의 과정을 거치고

// 3-way-handshaking : 클라이언트와 서버가 데이터 통신을 하기 전에 통신 준비가 되었다는 것을 확인하는 것.

// 네이버 데이터베이스에 값을 넣거나 사용자 정보 같은 걸 조회하거나 아무나 요청 하면 안됨
// 요청을 보낼 수 있는 host인지 확인

// 클라이언트는 서버에 통신 요청을 하고
// 서버는 통신 요청을 받아서 클라이언트에게 통신 요청을 수락 하고 응답 해준다.
// SYN + ACK

// 클라이언트는 SYN을 서버에 요청하고
// 서버는 SYN + ACK를 클라이언트에게 통신 요청 수락을 응답해준다.
// 클라이언트는 서버로 ACK를 보내면, 나 그럼 요청 보낼게 ?

// 서버에 요청을 보내고 응답을 받고

// 4 way-handshaking TCP 연결을 종료
// 통신을 종료하기 위해 클라이언트와 서버가 서로의 상태 확인
// 서버 FIN 메시지를 받고 클라이언트는 데이터가 없다는 것을 의미하는
// 메시지인 ACK를 보내고 서버는 데이터가 더 없으면 자신이 보내지지 않은 데이터를 확인 한 뒤에
// 전송할 거 있으면 전송을 하고 클라이언트에게 FIN 메시지를 전송,
// 클라이언트는 서버가 더 이상 전송할 데이터가 없는 것을 확인하고 ACK 메시지를 보내준다.

// 여기서 통신 종료
// 월요일 요청 객체 응답 객체
const http = require("http");
// express X

// 서버 객체만 만든 것.
const server = http.createServer((req, res) => {
    // createServer 서버 객체를 만들고 콜백함수로 익명함수 전달해서
    // 요청과 응답의 처리 내용의 로직을 작성

    // 상태 코드
    // 응답 해줄 때 200

    // 1xx : 거의 없다.
    // 2xx : 성공
    // 3xx : 리다이렉트 요청을 다시 다른곳으로 보내라
    // 4xx : url 정상적이지 않거나 페이지가 없거나 (404)
    // 5xx : 서버가 정상적이지 않음, 서버 터지면
    // 2xx, 4xx, 5xx 주로 사용

    // 성공 응답
    // res.statusCode = 200;

    // 실패 응답
    // res.statusCode = 400;

    // 요청한 Host의 url
    // const url = req.url;

    // /homeData
    // /boardData

    const URL = req.url;
    console.log(URL);

    switch (URL) {
        case "/":
            res.end("NodeJS");
            break;
        case "/giveup":
            res.end("Don't give up");
            break;
        case "/cheerup":
            res.end("you can do it");
            break;
        case "/keepgoing":
            res.end("keep going");
            break;
        case "/function":
            res.end("function master");
            break;
        case "/typescript":
            res.end("typescript master");
            break;
        case "/difficult":
            res.end("CRUD")
            break;
        case "/sea":
            res.end("see us sea")
            break;
        case "/funny":
            res.end("javascript")
            break;
        case "/group":
            res.end("study group")
            break;
    }
})

server.listen(4000, () => {
    console.log("server on ~")
})