class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    async signup(req, res) {
        const { uid, upw, uname } = req.body;
        await this.userService.signup(uid, upw, uname);
        res.send("회원가입 완료");
    }

    async getUser(req, res) {
        const { id } = req.params;
        const user = await this.userService.getUser(id);
        // res.send(user);
    }
}

module.exports = UserController;






// const { Users } = require("../models");

// const user = {
//     // 회원가입
//     async signup(uid, upw, uname) {
//         try {
//             await Users.signup({
//                 uid, upw, uname
//             });
//             return "회원가입 완료"
//         } catch (error) {
//             return error;
//         }
//     },
//     // 로그인
//     async login(uid, upw) {
//         try {
//             await Users.login({
//                 uid, upw
//             });
//             return "로그인 완료"
//         } catch (error) {
//             return error;
//         }
//     }
// }

// module.exports = user;