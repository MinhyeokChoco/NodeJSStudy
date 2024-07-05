const { User } = require("../lib");

class UserModel {

    async createUser(uid, upw, uname) {
        User.create({ uid, upw, uname });

    }
    // async createUser(uid, upw, uname) {
    //     await User.create({ uid, upw, uname });
    // }

    // async findUserId(id) {
    //     return await User.findOne({ where: { id } });
    // }
}

module.exports = UserModel;

// 모델 => 레파지토리 => 서비스 => 컨트롤러

/*
컨트롤러{
    요청에 따라서 어떤 기능을 동작시킬 지
    서비스 : {
        비즈니스 로직 (암호화, DTO, 데이터 형식에 맞는지 확인)
        레파지토리 : {
          데이터 베이스 조작
            모델 : {
              데이터베이스 관리
            }
        }
    }
}
*/

// ORM : DBMS와 자바스크립트 코드로 생성한 객체와의 매핑을 위하여 쿼리문 실행이 아닌 메서드의 매개변수로 객체를 전달해서 매핑