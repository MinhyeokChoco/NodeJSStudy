const { Post } = require("../lib");

class PostModel {

    async createPost(title, content, image, view, user_name) {
        await Post.create({ title, content, image, view, user_name });
    }

    async findPostAll() {
        return await Post.findAll();
    }

    async findPostOne(id) {
        return await Post.findOne(id);
    }

    async updatePost(title, content, image) {
        await Post.update({ title, content, image }, { where: { id } })
    }

    async deletePost(id) {
        await Post.destory({ where: { id } });
    }
}

module.exports = PostModel;