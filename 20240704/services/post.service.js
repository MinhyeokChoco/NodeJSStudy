class PostService {
    constructor(repository) {
        this.repository = repository;
    }

    async createPost(title, content, image, view, user_name) {
        await this.repository.createPost(title, content, image, view, user_name);
    }

    async findPostAll() {
        return await this.repository.findPostAll();
    }

    async findPostOne(id) {
        return await this.repository.findPostOne(id);
    }

    async updatePost(title, content, image) {
        await this.repository.updatePost(title, content, image);
    }

    async deletePost(id) {
        await this.repository.deletePost(id);
    }
}

module.exports = PostService;