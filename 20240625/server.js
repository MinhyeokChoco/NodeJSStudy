const express = require('express');
const app = express();
const PORT = 3000;
const uploadRouter = require("./router/todo.router")
const path = require('path');
const { upload } = require("./lib/imgUpload");

const todoLists = require("./model/todo.models");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "page"));
app.use("/upload", express.static(path.join(__dirname, "upload")));
app.use("/upload", uploadRouter);

app.get('/', async (req, res) => {
    res.render("main");
})

app.get('/todoC', async (req, res) => {
    res.render("todoC");
})

app.post('/todoC', upload.single("upload"), async (req, res) => {
    const { title, who, rank, status } = req.body;
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const fkdate = `${year}-${month}-${day}`
    try {
        const image = `/upload/${req.file.filename}`
        await todoLists.createTodos(image, title, who, fkdate, rank, status);
    } catch (error) {
        console.log(error);
    }
    res.redirect("/todoR");
});

app.get('/todoR', async (req, res) => {
    const todos = await todoLists.listTodos();
    res.render("todoR", { todos });
});

app.post('/update/:id', upload.single("image"), async (req, res) => {
    try {
        const { id } = req.params;
        const { title, who, rank, status } = req.body;
        const image = `/upload/${req.file.filename}`
        console.log(who);
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const fkdate = `${year}-${month}-${day}`
        console.log(date);
        console.log(status);
        await todoLists.updateTodo(image, title, who, fkdate, rank, status, id);
    } catch (error) {
        console.log('err : update');
    }
    // console.log({ image, title, date, rank, status })
    res.redirect("/todoR");
});

app.post('/delete/:id', async (req, res) => {
    const { id } = req.params;
    console.log(id);
    await todoLists.deleteTodo(id);
    res.redirect("/todoR")
});

app.listen(PORT, () => {
    console.log("서버 대기 중");
})