const { Model, DataTypes } = require('sequelize');

// 유저 정보 담을 테이블 생성
class User extends Model {
    static init(sequelize) {
        return super.init({
            // 유저 아이디
            uid: {
                type: DataTypes.STRING(30),
                unique: true
            },
            // 유저 비밀번호
            upw: {
                type: DataTypes.STRING(255)
            },
            // 유저 닉네임(작성자)
            uname: {
                type: DataTypes.STRING(20)
            }
        }, {
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: "User",
            tableName: "users",
            paranoid: false,
            charset: "utf8mb4",
            collate: "utf8mb4_general_ci"
        });
    }

    static assciate(db) {
        db.Users.hasMany(db.Posts, { foreignKey: "user_name", sourceKey: "uname" });
    }
}

module.exports = User;