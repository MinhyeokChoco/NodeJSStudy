class PostRepository {
    constructor(database) {
        this.database = database;
    }

    // async createPost(title, content, view) {
    //     await this.database.createPost(title, content, view);
    // }

    // async findPostAll() {
    //     return await this.database.findPostAll();
    // }

    // async findPostId(id) {
    //     return await this.database.findPostId(id);
    // }

    // async updatePost(title, content) {
    //     await this.database.updatePost(title, content);
    // }

    // async deletePost(id) {
    //     await this.database.deletePost(id);
    // }
}

module.exports = PostRepository;