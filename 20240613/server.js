// MySQL 연결
// 외부 모듈을 설치해서 사용할 것
// 설치하는 모듈을 MySQL 자체가 아니다 라고 생각하고 드라이버라고 생각하면 된다.

// mysql 모듈 설치
// mysql, mysql2

// mysql 일반 MySQL은 콜백 방식이다.
// mysql2 promise 기반으로 사용, 공식문서에서도 권장하는 모듈이다.

// npm init -y
// npm i mysql2

const mysql = require("mysql2");
// mysql2는 Connect(커넥트)를 맺을 수 있는 메서드이다.

// 유저 이름
// 유저 비밀번호
// database
// host : 127.0.0.1 (로컬)
// post : 3306
// 총 5가지가 필요하다.

// createConnection : 연결 요청을 보냄, 반환받은 객체를 통해 쿼리문을 요청할 수 있는 메서드를 제공
// 키 값은 고정, 변하면 안됨, 외워야 함 (user, password)
const mysqlConnect = mysql.createConnection({
    user: "root",
    password: "Dlalsgur1!",
    database: "test",
    multipleStatements: true
})
// multipleStatements : 다중 쿼리를 실행할 수 있게 설정하는 옵션이다.

// mysqlConnect : 객체를 반환 받는데 쿼리 작업을 할 수 있는 메서드가 포함 되어 있다.

// query 메서드 : 쿼리문을 매개변수로 전달 하면 쿼리문을 호출하고 실행 결과를 받을 수 있다.
// 테이블 생성 (쿼리문)
// mysqlConnect.query("CREATE TABLE products(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(10), number INT)");

mysqlConnect.query("SELECT * FROM products", (err, res) => {
    if (err) {
        console.log("테이블이 없어")
        const sql = "CREATE TABLE products(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(10), number INT)";
        mysqlConnect.query(sql);
        console.log("테이블이 없어서 만들게");
    } else {
        console.log("테이블이 있어")
    }
})

// 글 추가
// INSERT INTO 테이블이름 필드값 VALUES (id는 AUTO_INCREMENT로 자동으로 할당되게끔 해놔서 안 적었음)

// const createSql = "INSERT INTO products (name,number) VALUES(?,?)"
// mysqlConnect.query(createSql, ["hyeok2", "123"], (err) => {
//     if (err)
//         console.log(err)
//     console.log("글이 추가 되었습니다.")
// })


// 글 삭제

// const deleteSql = "DELETE FROM products WHERE id = ?;";
// const deleteSql2 = "SET @CNT = 0; UPDATE products SET products.id = @CNT:=@CNT+1;";
// const deleteSql3 = "ALTER TABLE products AUTO_INCREMENT = 0;";
// const deleteSqlAll = deleteSql + deleteSql2 + deleteSql3;

// mysqlConnect.query(deleteSqlAll, [2], (err) => {
//     if (err)
//         console.log("삭제할 로우를 못 찾았어");
//     console.log("정상적으로 삭제됨");
// })

// SET = @CNT를 초기화 0으로 할당.

// 글 수정
const updateSql = "UPDATE products SET name = ?, number = ? WHERE id = ?";
mysqlConnect.query(updateSql, ["hyeok2", "456", "2"], (err) => {
    if (err)
        console.log(err)
    console.log("수정 완료")
})

// 글 조회
mysqlConnect.query("SELECT * FROM products", (err, res) => {
    console.log(res);
})

// from과 * 과 그냥 테이블 이름 차이
// - 조회, 수정, 삭제 등 기능마다 다름 * 조회 
// int라고 타입을 지정해줬는데 "" 붙이는 이유
// 네임, 넘버, id 순서가 왜 바꼈는지


// mysql -u root -p
// create databases test;
// show databases;

