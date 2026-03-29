const express = require('express');
const app = express();
const PORT = 3000;

const path = require('path');
const userController = require("./controllers/user.controller");
const postController = require("./controllers/post.controller");
const { Posts } = require("./models")

app.set("views", path.join(__dirname, "page"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.listen(PORT, () => {
    console.log("Copy")
})

app.get("/", async (req, res) => {
    const users = await userController.userSelectAll();
    res.render("main", { users });
})

app.get("/create", (req, res) => {
    res.render("create");
})

app.post("/create", async (req, res) => {
    const { name, age, msg } = req.body;
    await userController.create(name, age, msg);
    res.redirect("/");
})

app.post("/post_create", async (req, res) => {
    const { user_name, content } = req.body;
    await postController.create(user_name, content);
    res.redirect(`/view/${user_name}`);
})

app.get("/view/:name", async (req, res) => {
    const { name } = req.params;
    const data = await userController.userSelectName(name, Posts);
    // 쿼리문이 두번 동작한다.
    // 유저를 찾고 글을 찾는 쿼리를 한번 더 호출하면 쿼리가 두번
    // 관계형 join으로 조회를 하면 누가 작성한 글인지
    // SQL문은 작성 가능
    // 시퀄라이즈 ORM은 외래키가 없으면 join을 할 수 없게 해놓았음.
    console.log(data);

    res.render("view", { data });
})

app.get("/post_update/:name", async (req, res) => {
    const { name } = req.params;
    const { id } = req.query;
    const [data] = await postController.postSelectIndex(id);
    // console.log(data);
    res.render("update", { name, data });
})

app.post("/post_update", async (req, res) => {
    const { name, id, content } = req.body;
    await postController.postUpdate(id, content);
    res.redirect(`/view/${name}`)
})

app.post("/view/:id", async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    await postController.postDelete(id);
    res.redirect(`/view/${name}`);
})