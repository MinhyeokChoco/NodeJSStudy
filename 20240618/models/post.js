const { getViewPostAll } = require('../../20240617/models/post');
const mysql = require('./config');

const posts = {
    initTable: async () => {
        try {
            const result = await mysql.query("SELECT * FROM posts");
        } catch (error) {
            await mysql.query("CREATE TABLE posts(id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(20), content VARCHAR(100))");
        }
    },

    getViewPostAll: async () => {
        try {
            const [result] = await mysql.query("SELECT * FROM posts");
            return result;
        } catch (error) {
            console.log("err : models select post table")
        }
    },

    getSelectIndexPost: async (id) => {
        try {
            const result = await mysql.query("SELECT * FROM posts WHERE id = ?", [id])
            return result;
        } catch (error) {
            console.log("err : models select index post table");
        }
    }
}

posts.initTable();
posts.getSelectIndexPost(2);

module.exports = posts;