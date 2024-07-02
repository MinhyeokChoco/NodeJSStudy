const { Model, DataTypes } = require('sequelize');

// 게시글의 여러 내용을 담을 테이블 생성
class Post extends Model {
    static init(sequelize) {
        return super.init({
            // 글 제목
            title: {
                type: DataTypes.STRING(50),
                allowNull: false
            },
            // 글 내용
            content: {
                type: DataTypes.STRING(255)
            },
            // 글 작성자
            // user_name: {
            //     type: DataTypes.STRING(10),
            //     allowNull: false
            // },
            // 글 작성일
            // date: {
            //     type: DataTypes.STRING(30),
            // },
            // 글 조회수
            view: {
                type: DataTypes.INTEGER
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
        db.Posts.belongsTo(db.Users, { foreignKey: "user_name", target: "uname" });
    }
}

module.exports = Post;