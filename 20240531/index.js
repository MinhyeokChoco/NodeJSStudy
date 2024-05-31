// TCP server를 간단하게 구현

// NodeJS의 내장 모듈
// net 내장모듈을 제공

// http는 HTTP 프로토콜을 만들 수 있는 내장 모듈
// net 보다는 한 단계 위의 내용

// TCP 소켓을 만들어서 사용
// TCP 연결을 맺는 프로토콜을 만들 수 있다.

// 모듈 가져오기
const PORT = 8000; // 포트 번호 지정

const net = require('net'); // 내장 모듈 net 가져오기

// 서버 객체 생성
const server = net.createServer((client) => {
    // 클라이언트가 접속하면 보내는 데이터를 받기 위해서

    // 'data' : 이벤트 데이터를 전송 하게 되면 네트워크에 전송된 데이터
    // 바이너리 형식으로 전송이 된다. 바이너리는 1과 0을 사용하여 데이터와 명령을 나타내는 방법입니다.
    // 클라이언트가 보낸 데이터는 Buffer(`버퍼`) 형태로 전송이 되며, 서버 측에서는 해석해서 문자열로 변환해서 사용
    // 출력된 데이터는 인코딩을 해서 데이터를 표현 해주면 되는 것이다.
    // 인코딩 UTF-8
    client.setEncoding("utf-8");

    client.on('data', (data) => {
        // 클라이언트에서 보낸 데이터
        // 네트워크를 통해 전송되는 데이터
        // 바이너리 형식으로 전송 된다.
        console.log(data.toString());
        // 응답
        // client.end();

        // Content-type : 전송하는 데이터의 타입이 어떤거다 라고 명시 ex) text/html

        // GET 방식은 데이터를 조회 하겠다. 조회, 요청 한 것

        // HTTP의 버전은 1.0, 1.1, 2.0 등이 있는데
        // 월드와이드웹에서 가장 보편적으로 쓰는 HTTP 1.1 버전을 우리가 사용한다.
        // 생성년도는 1997년도 이고 아직까지 사용한다.

        // GET / HTTP/1.1
        // Host: localhost:8000
        // Sec-Fetch-Site: none
        // Connection: keep-alive => Connection 뜻 : 클라이언트와 서버의 연결 상태의 속성을 정한다. 다음 요청을 보낼 때 까지 연결 유지
        // Upgrade-Insecure-Requests: 1
        // Sec-Fetch-Mode: navigate
        // Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
        // User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15
        // Accept-Language: ko-KR,ko;q=0.9
        // Sec-Fetch-Dest: document
        // Accept-Encoding: gzip, deflate

        const body = `<html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <div>안녕하세요</div>
        </body>
        </html>`
        // body의 내용, 본문의 내용
        const resMsg = `http/1.1 200 ok
        Content-Type : text/html
        Content-Length : ${body.length}

        ${body}
        `

        client.write(resMsg);
        client.end();
    })
})

// 서버를 대기 상태로 만들기
server.listen(PORT, () => {
    console.log("Server On ~")
})

// net : 가장 기초적인 네트워크 구성을 가지고 있는 내장 모듈