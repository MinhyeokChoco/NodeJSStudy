const { User } = require("../lib");

class UserModel {

    async createUser(uid, upw, uname) {
        await User.create({ uid, upw, uname });
    };

    async findUser(uid) {
        return await User.findOne({ where: { uid } });
    }
}

module.exports = UserModel;


// 모델에서는 조회
// 레파지토리에서 조회 한 자료를 반환
// 서비스 비즈니스 로직 컴페어랑 jwt토큰
// 컨트롤러 컴페어된거를 로그인 완료 시키는