const express = require('express');
const app = express();
const PORT = 3000;

const path = require('path')
const userRouter = require("./routers/user.router");
const postRouter = require("./routers/post.router");
const { sequelize } = require("./models/lib");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/user", userRouter);
app.use("/post", postRouter);
app.use("/img", express.static(path.join(__dirname, "upload")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "page"));

sequelize.sync({ fouce: false });

app.listen(PORT, () => {
    console.log("Server Complete");
})