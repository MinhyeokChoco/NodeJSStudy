const mysql = require('./config');

// 글 작성 C
// 글 조회 R
// 글 수정 U
// 글 삭제 D
// 사용하기 편한 메서드 형태로 구성
const posts = {
    // async는 promise를 반환하는 함수
    initTable: async () => {
        try {
            // 테이블이 존재하는지 조회
            const result = await mysql.query("SELECT * FROM posts");
            console.log(result);
        } catch (error) {
            // 에러가 발생하면
            await mysql.query("CREATE TABLE posts(id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(20), content VARCHAR(100))");
        }
    },

    // 글의 전체 내용을 조회
    getViewPostAll: async () => {
        try {
            // 배열의 구조분해 할당은 배열에 들어있는 값 순서대로, 배열의 첫번째 내용만 할당, 데이터의 부분
            // return값이 promise이다.
            const [result] = await mysql.query("SELECT * FROM posts");
            return result;
        } catch (error) {
            console.log("err : models select post table")
        }
    },

    // 선택 글 조회 (상세 페이지)
    getSelectIndexPost: async (id) => {
        try {
            // [[{}], []]
            // [{},{}]
            // {}
            // {id : {a: b}}
            // {id : {a, b}}
            const [[result]] = await mysql.query("SELECT * FROM posts WHERE id = ?", [id])
            console.log(result);
            return result;
        } catch (error) {
            console.log("err : models select index post table")
        }
    },

    // 글 추가 메서드
    setPostContent: async (title, content) => {
        try {
            await mysql.query("INSERT INTO posts(title, content)VALUES(?,?)", [title, content])
        } catch (error) {
            console.log("err : models INSERT post table")
        }
    }
}

posts.initTable();
// posts.setPostContent("제목1", "컨텐츠1");
posts.getSelectIndexPost(2);
// 모자란 orm을 조금 표현했다.
// 객체와 데이터베이스 맵핑
module.exports = posts;