const mysql = require('mysql2');

const mysqlConnect = mysql.createConnection({
    user: "root",
    password: "Dlalsgur1!",
    database: "board",
    multipleStatements: true
})

mysqlConnect.query("SELECT * FROM board", (err, res) => {
    if (err) {
        console.log("테이블이 없어")
        const sql = "CREATE TABLE board(id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(50),content VARCHAR(100), views INT)";
        mysqlConnect.query(sql);
        console.log("테이블 생성");
    } else {
        console.log("이미 테이블이 있어");
    }
})