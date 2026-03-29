const express = require("express");
const app = express();
const PORT = 3000;
const { sequelize } = require("./model/lib");
const container = require("./container/DI");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// fouce : 초기화 할지 말지
sequelize.sync({ fouce: false });

const userController = container.get("UserController");

app.get("/users/:id", (req, res) => userController.getUser(req, res));
app.post("/createUser", (req, res) => userController.signup(req, res));

// app.get("/users/:id", userController.getUser);

app.listen(PORT, () => {
    console.log("서버 대기 중");
})

// npm i express sequelize mysql2