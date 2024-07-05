const { Model, DataTypes } = require('sequelize');

// 게시글을 담을 테이블 생성
class Post extends Model {
    static init(sequelize) {
        return super.init({
            // 게시글 제목
            title: {
                type: DataTypes.STRING(30),
                allowNull: false
            },
            // 게시글 내용
            content: {
                type: DataTypes.TEXT
            },
            // 게시글 이미지
            image: {
                type: DataTypes.STRING(255)
            },
            // 게시글 조회수
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
        db.Post.belongsTo(db.User, { foreignKey: "user_name", target: "uname" });
    }
}

module.exports = Post;