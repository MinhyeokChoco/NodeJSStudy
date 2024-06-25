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

app.get('/todoc', async (req, res) => {
    res.render("todoc");
})

app.post('/todoc', upload.single("upload"), async (req, res) => {
    const { title, who, rank, status } = req.body;
    try {
        const image = `/upload/${req.file.filename}`
        await todoLists.createTodos(title, image, who, rank, status);
    } catch (error) {
        console.log(error);
    }
    res.redirect("/todoR");
});

app.get('/todoR', async (req, res) => {
    const todos = await todoLists.listTodos();
    res.render("todoR", { todos });
});

app.put('/todo/:id', async (req, res) => {
    const { id } = req.params;
    const { title, who, day, rank } = req.body;
    await todoLists.updateTodo(id, title, who, day, rank);
    res.redirect("/todoR");
});

app.delete('/todo/:id', async (req, res) => {
    const { id } = req.params;
    await todoLists.deleteTodo(id);
    res.redirect("/todoR")
});

app.listen(PORT, () => {
    console.log("서버 대기 중");
})