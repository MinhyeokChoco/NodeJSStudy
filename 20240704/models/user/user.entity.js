const { Model, DataTypes } = require('sequelize');

// 유저 정보 담을 테이블 생성
class User extends Model {
    static init(sequelize) {
        return super.init({
            // 유저 아이디
            uid: {
                type: DataTypes.STRING(30),
                allowNull: false,
                unique: true
            },
            upw: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            // 유저 닉네임 (작성자)
            uname: {
                type: DataTypes.STRING(20),
                allowNull: false,
                unique: true
            }
        }, {
            sequelize,
            timestamps: true,
            modelName: "User",
            tableName: "users",
            charset: "utf8mb4",
            collate: "utf8mb4_general_ci"
        });
    }

    static associate(db) {
        db.User.hasMany(db.Post, { foreignKey: "user_name", sourceKey: "uname" });
    }
}

module.exports = User;