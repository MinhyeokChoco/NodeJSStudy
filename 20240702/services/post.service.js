class PostService {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }

    async createPost(title, content, view) {
        await this.postRepository.createPost(title, content, view);
    }

    async findPostAll() {
        return await this.postRepository.findPostAll();
    }

    async findPostId(id) {
        return await this.postRepository.findPostId(id);
    }

    async updatePost(title, content) {
        await this.postRepository.updatePost(title, content);
    }

    async deletePost(id) {
        await this.postRepository.deletePost(id);
    }

}

module.exports = PostService;