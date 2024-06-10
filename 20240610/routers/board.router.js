const router = require('express').Router()
const fs = require('fs');
const path = require('path');

// 미들웨어로 추가 요청과 응답이 일어나기 전에 기능을 처리한다.
// 라우팅 처리

// board API
// router 요청 메서드 get이 들어오면 url이 /board 일 경우 콜백 함수를 호출해줘
router.get('/', (req, res) => {
    const filePath = path.join(__dirname, "..", "views", "board", "index.html")
    fs.readFile(filePath, "utf-8", (err = 404, data) => {
        if (err) return res.send("err");
        res.send(data);
    })
})

router.get('/list', (req, res) => {
    const filePath = path.join(__dirname, "..", "views", "board", "list.html")
    fs.readFile(filePath, "utf-8", (err = 404, data) => {
        if (err) return res.send("err");
        res.send(data);
    })
})

router.get('/detail', (req, res) => {
    const filePath = path.join(__dirname, "..", "views", "board", "detail.html")
    fs.readFile(filePath, "utf-8", (err = 404, data) => {
        if (err) return res.send("err");
        res.send(data);
    })
})

module.exports = router;