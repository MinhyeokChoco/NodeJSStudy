const config = require("./config");
const Users = require("./users");
const Posts = require("./posts");
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    config.project.database,
    config.project.username,
    config.project.password,
    config.project
)

const db = {};
db.sequelize = sequelize;
db.Users = Users;
db.Posts = Posts;

Users.init(sequelize);
Posts.init(sequelize);

Users.associate(db);
Posts.associate(db);

sequelize.sync({ force: false }).then(async () => {
    console.log("연결 성공했습니다.");

    Users.create
})