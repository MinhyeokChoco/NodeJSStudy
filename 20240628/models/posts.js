const Sequelize = require('sequelize');

class Post extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            content: {
                type: Sequelize.STRING(100),
                allowNull: false, // null 즉 값이 없으면 되는지 안되는지, false가 안됨
                // primaryKey: true // 기본키 id가 기본으로 생긴다 (없으면 자동으로 생성)
            }
        }, {
            sequelize,
            timestamps: true,
            modelName: "Post",
            tableName: "posts",
            charset: "utf8mb4",
            collate: "utf8mb4_general_ci"
        });
    }
    static associate(db) {
        // 자식 테이블
        // belongsTo : 받는 측, 자식 테이블이 부모의 테이블에서 외래키를 foreignKey로 사용을 하고
        db.Posts.belongsTo(db.Users, { foreignKey: "user_name", target: "name" });
    }

    // static associate(db) {
    // 1:1로 사용자와 게시글의 테이블의 관계를 설정
    // hasMany : 테이블의 관계를 정의한다.
    // users 부모 테이블이 될 것
    // sourceKey : foreignKey가 연결할 키
    // foreignKey : 생성할 외래키 이름
    // db.Users.belongsTo(db.Users, { foreignKey: "user_id", targetKey: "id" });
    // }
}

module.exports = Post;