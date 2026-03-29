class PostRepository {
    constructor(database) {
        this.database = database;
    }

    async createPost(title, content, image, view, user_name) {
        await this.database.createPost(title, content, image, view, user_name);
    }

    async findPostAll() {
        return await this.database.findPostAll();
    }

    async findPostOne(id) {
        return await this.database.findPostOne(id);
    }

    async updatePost(title, content, image) {
        await this.database.updatePost(title, content, image);
    }

    async deletePost(id) {
        await this.database.deletePost(id);
    }
}

module.exports = PostRepository;