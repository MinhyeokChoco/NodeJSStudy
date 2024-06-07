const net = require('net');
const getRequest = require("./lib/request");
const getResponce = require('./lib/responce');
const staticFileObj = require("./lib/static");
// exports로 내보내면 자동으로 생성해줌
const server = net.createServer();

// server.on 메서드로 이벤트 구독

// 논리적 연결이 됐으면
server.on('connection', (socket) => {
    let buffer = Buffer.alloc(0)
    // socket data를 보내면 호출될 이벤트
    socket.on("data", (chunk) => {
        // concat : 버퍼에 있는 데이터를 합쳐준다.
        // 처음에 할당한 길이가 변하지 않기 때문에
        // concat 버퍼 데이터를 합쳐주기 위해서
        buffer = Buffer.concat([buffer, chunk]);
        // 요청 객체 내용
        const req = getRequest(buffer);
        console.log(req);
        // 응답 객체 내용
        const res = getResponce(socket, req);
        // 라우팅 처리 (요청 경로의 값을 판단해서 어떤 처리를 해줄지 결정)

        // 정적 파일 라우팅 처리
        for (const path in staticFileObj) {
            if (req.startLine.url === path) {
                res.sendStatic(path)
                return;
            }

        } // 페이지를 정적으로 렌더 할 수 있게 라우팅 처리를 했다.

        // 페이지 라우팅
        // Resurtfull API // get / post / put / delete
        // API : Application Programing Interface
        const urlPath = req.startLine.url
        if (urlPath === "/") {
            res.send("index")
        } else if (urlPath === "/board/list") {
            res.send("list")
        } else if (urlPath === "/board/write") {
            res.send("write")
        } else {
            res.notFound("요청 주소 확인해주세요.")
        }

        // 메서드가 post일 경우 본문 내용으로 json 파일을 만들어서 내용을 추가하기.
        // html fs 등등
    })
})

server.listen(3000, () => {
    console.log("server on")
})

/*
- server.js : 서버
- lib : 라이브러리를 넣어놓을 폴더
lib -- request.js : 요청
lib -- response.js : 응답
lib -- static.js
- public : 정적 파일들
public -- css
public -- js
- views
views -- index.html
views -- board
--- list.html
--- write.html
*/

// 구조 분해 할당은 객체나 배열만 가능함