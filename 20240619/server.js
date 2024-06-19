const express = require('express');
const app = express();
const PORT = 3000;
const uploadRouter = require("./routers/upload.router");
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/img", express.static(path.join(__dirname, "upload")));

app.use("/upload", uploadRouter);


app.listen(PORT, () => {
    console.log("서버 대기 상태");
})