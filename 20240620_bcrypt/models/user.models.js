const mysql = require("./config")

const users = {
    // 유저 정보를 담을 테이블 생성
    initUsers: async () => {
        try {
            const result = await mysql.query("SELECT * FROM users");
        } catch (error) {
            await mysql.query("CREATE TABLE users(id INT AUTO_INCREMENT PRIMARY KEY, uid varchar(20), upw varchar(120))");
        }
    },

    // 로그인
    login: async (uid, same) => {
        try {
            if ((user_id === uid) && (same))
                return true;
            return false;
        } catch (error) {
            return false;
        }
    },

    // 회원 가입
    signup: async (uid, upw) => {
        try {
            await mysql.query("INSERT INTO users(uid, upw)VALUES(?,?)", [uid, upw]);
            return true;
        } catch (error) {
            return false;
        }
    },

    // 회원 가입 시 아이디 중복인지 검사
    signupuid: async (uid) => {
        try {
            const [[result]] = await mysql.query("SELECT * FROM users WHERE uid = ?", [uid]);
            return result;
        } catch (error) {
            return false;
        }
    }
}

module.exports = users;

// 반환값, 데이터타입