const mysql2 = require('mysql2/promise');

const mysql = mysql2.createPool({
    user: "root",
    password: "dlalsgur12",
    multipleStatements: true,
    database: "germany"
})

mysql.getConnection((err) => {
    console.log(err);
});

module.exports = mysql;