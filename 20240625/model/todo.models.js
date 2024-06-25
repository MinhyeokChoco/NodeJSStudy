const mysql = require("./config");

const todoLists = {
    // 작성한 할일들을 담을 테이블 생성
    initTodos: async () => {
        try {
            const result = await mysql.query("SELECT * FROM lists");
        } catch (error) {
            await mysql.query("CREATE TABLE lists(id INT AUTO_INCREMENT PRIMARY KEY, title varchar(50), image varchar(100), date datetime default now(), who varchar(10), `rank` int, status int default 1)");
        }
    },

    createTodos: async (title, img, who, rank) => {
        try {
            await mysql.query("INSERT INTO lists(title, image, who, `rank`) VALUES(?,?,?,?)", [title, img, who, rank]);
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

    updateTodo: async (title, who, date, rank, status, id) => {
        try {
            await mysql.query("UPDATE lists SET title = ?, who = ?, date = ?, `rank` = ?, status = ? WHERE id = ?", [title, who, date, rank, status, id]);
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

module.exports = todoLists;