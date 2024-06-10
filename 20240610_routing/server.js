const express = require('express');
const app = express();

const fs = require('fs');
const path = require('path');

const PORT = 3000;

const userRouter = require('./routers/user.routers');
const boardRouter = require('./routers/board.routers');
const cartRouter = require('./routers/cart.routers');

app.use('/user', userRouter);
app.use('/board', boardRouter);
app.use('/cart', cartRouter);

app.get("/", (req, res) => {
    fs.readFile("index.html", "utf-8", (err = 404, data) => {
        if (err) return res.status(404).send("페이지를 로드하는데 오류가 났어")
        res.send(data);
    })
})

app.listen(PORT, () => {
    console.log("server on~");
});