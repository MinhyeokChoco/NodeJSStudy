const { Post } = require("../lib");

class PostModel {


    // // 글 작성
    // async createPost(title, content, view) {
    //     await Post.create({ title, content, view });
    // }
    // // 글 전체 조회
    // async findPostAll() {
    //     return await Post.findAll();
    // }
    // // 글 선택 조회
    // async findPostID(id) {
    //     return await Post.findOne({ where: { id } });
    // }
    // // 글 수정
    // async updatePost(title, content, id) {
    //     await Post.update({ title, content }, { where: { id } });
    // }
    // // 글 삭제
    // async deletePost(id) {
    //     consolg.log({ where: { id } });
    //     await Post.delete({ where: { id } });
    // }
}

module.exports = PostModel;