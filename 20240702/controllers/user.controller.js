const { Users } = require("../models");

const user = {
    // 회원가입
    async signup(uid, upw, uname) {
        try {
            await Users.signup({
                uid, upw, uname
            });
            return "회원가입 완료"
        } catch (error) {
            return error;
        }
    },
    // 로그인
    async login(uid, upw) {
        try {
            await Users.login({
                uid, upw
            });
            return "로그인 완료"
        } catch (error) {
            return error;
        }
    }
}

module.exports = user;