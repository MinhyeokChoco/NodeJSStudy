const mysql = require("./config");

const todoLists = {
    // 작성한 할일들을 담을 테이블 생성
    initTodos: async () => {
        try {
            const result = await mysql.query("SELECT * FROM lists");
        } catch (error) {
            await mysql.query("CREATE TABLE lists(id INT AUTO_INCREMENT PRIMARY KEY, image varchar(200), title varchar(100), date varchar(30), who varchar(10), `rank` varchar(5), status varchar(5))");
        }
    },

    createTodos: async (img, title, date, who, rank, status) => {
        try {
            await mysql.query("INSERT INTO lists(image, title, date, who, `rank`, status) VALUES(?,?,?,?,?,?)", [img, title, date, who, rank, status]);
        } catch (error) {
            console.log("Error : models insert lists table", error)
        }
    },

    listTodos: async () => {
        try {
            const [result] = await mysql.query("SELECT * FROM lists");
            return result;
        } catch (error) {
            console.log("Error : models select lists table"), error;
        }
    },

    updateTodo: async (image, title, who, date, rank, status, id) => {
        try {
            await mysql.query("UPDATE lists SET image = ?, title = ?, who = ?, date = ?,`rank` = ?, status = ? WHERE id = ?", [image, title, who, date, rank, status, id]);
        } catch (error) {
            console.log("Error : models update lists table", error);
        }
    },

    deleteTodo: async (id) => {
        try {
            await mysql.query("DELETE FROM lists WHERE id = ?", [id]);
        } catch (error) {
            console.log("Error : models delete lists table", error);
        }
    }
}

// todoLists.initTodos();
// todoLists.createTodos();
// todoLists.listTodos();
// todoLists.updateTodo();
// todoLists.deleteTodo();
// "/Users/leeminhyeok/Documents/MH/NodeJS/20240625/upload/ì¤í¬ë¦°ì· 2024-05-31 ì¤í 5.04.02_1719397982037.png", "ggg", "2024-06-26", 2, 2, 2

module.exports = todoLists;