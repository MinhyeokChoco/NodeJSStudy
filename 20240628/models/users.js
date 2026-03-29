// 시퀄라이즈에 매핑할 유저 객체의 내용
// 객체의 형태가 정해져 있다.
const Sequelize = require('sequelize');

// Sequelize.Model === class
// Sequelize.Model 상속 받아서 매핑할 객체를 생성 해라

// User 클래스 생성 (클래스 이름은 우리가 정하는 것, 고정값 아님)
// Sequelize.Model 클래스를 상속 받는다.
class User extends Sequelize.Model {
    // 초기화 함수
    // init (이것도 정하는 것, 고정값 아님)
    // 시퀄라이즈 객체
    static init(sequelize) {
        // super == 상속 받은 부모의 생성자 호출 super.init 함수를 호출 super()
        // super.init() 상속 받은 부모의 init 함수를 호출
        // sequelize.Model.init() : 매개변수 2개
        // 첫번째 매개변수(객체) : 매핑할 테이블의 내용 entity 데이터의 내용
        // 두번째 매개변수(객체) : 매핑할 테이블의 설정(이름 등등)
        // super.init : 호출하게 되면 테이블이 없으면 만들고, 있으면 매핑(entity가 다르면 에러가 발생합니다.)
        return super.init({
            // 컬럼의 내용
            /*
                create table user(
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    name VARCHAR(20),
                    age INT,
                    msg TEXT,
                    date DATE default Date.now()
                );
            */
            // name VARCHAR(20)
            name: {
                // 컬럼의 속성 내용
                // 시퀄라이즈의 타입
                type: Sequelize.STRING(20),
                unique: true // 중복 안됨
            },
            age: {
                type: Sequelize.INTEGER,
            },
            msg: {
                type: Sequelize.TEXT
            }
        }, {
            // 매핑할 테이블의 속성 내용
            // sequelize 키 값으로 시퀄라이즈 객체를 추가
            // sequelize 키를 맞춰서 작성을 해줘야 함
            sequelize: sequelize,
            // 생성 시간 속성을 추가, 컬럼을 추가할지 말지
            // created_at 컬럼을 추가할지 말지
            // updated_at 컬럼을 추가할지 말지
            timestamps: true,
            // 컬럼으로 created_at, updated_at 두 컬럼을 추가해준다.

            // underscored : 표기법을 바꿔주는 속성
            // 기본적으로 스네이크 표기법을 사용하는데
            // 스네이크 표기법을 카멜 표기법으로 변경
            // created_at => createAt
            underscored: false,
            modelName: "User", // 모델의 이름을 설정, join 관계 조회 시에
            tableName: "users", // 매핑할 테이블의 이름, 없으면 이 이름으로 테이블을 생성
            paranoid: false, // paranoid : 속성이 true면 deleted_at, 컬럼의 값이 삭제되면 시간이 표기되고 삭제를 했지만 데이터는 남겨두고 싶을 때, 하지만 조회는 안된다.
            charset: "utf8mb4", // 인코딩 방식
            collate: "utf8mb4_general_ci"
        });
    }
    // 테이블의 관계성을 만들 함수
    // 테이블들 내용을 매개변수로 받고 그 중에서 어떤 테이블과 관계를 맺을 지
    static associate(db) {
        // 1:1로 사용자와 게시글의 테이블의 관계를 설정
        // hasMany : 테이블의 관계를 정의한다. 1:N
        // hasOne : 1:1의 관계를 정의할 때
        // users 부모 테이블이 될 것
        // sourceKey : foreignKey가 연결할 키, 부모 테이블에서 제공할 키
        // foreignKey : 생성할 외래키 이름, 외래키를 가질 테이블에 줄 컬럼명
        db.Users.hasMany(db.Posts, { foreignKey: "user_name", sourceKey: "name" });
    }
}

module.exports = User;