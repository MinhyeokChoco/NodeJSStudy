const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const { sequelize } = require("./models/lib");
const router = require("./routers/user.router");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "pages"));

sequelize.sync({ fouce: false });

app.listen(PORT, () => {
    console.log("서버 대기 중");
})