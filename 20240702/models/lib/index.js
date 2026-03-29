const config = require("./config");
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    config.project.database,
    config.project.username,
    config.project.password,
    config.project
);

const db = {};

const entitys = ["../user/user.entity", "../post/post.entity"];

entitys.forEach((path) => {
    const model = require(path);
    model.init(sequelize);
    db[model.name] = model;
})

entitys.forEach((path) => {
    const model = require(path);
    model.associate(db);
})

db.sequelize = sequelize;
module.exports = db;