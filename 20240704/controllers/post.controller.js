class PostController {
    constructor(service) {
        this.service = service;
    }

    async createPost(req, res) {
        const { title, content } = req.body;
        const filename = req.file.filename;
        const image = "/img/" + filename;
        await this.service.createPost(title, content, image);
        res.redirect("/post/view");
    }

    async findPostAll(req, res) {
        const data = await this.service.findPostAll();
        res.render("view", { data });
    }

    async findPostOne(req, res) {
        const { id } = req.params;
        const data = await this.service.findPostOne(id);
        res.redirect("/post/detail", { data });
    }

    async updatePost(req, res) {
        // const { id } = req.params;
        const data = await this.service.updatePost(title, content, image);
        res.redirect("/post/modify", { data });
    }

    async deletePost(req, res) {
        const { id } = req.params;
        const data = await this.service.deletePost(id)
        res.redirect("/post/view", { data });
    }
}

module.exports = PostController;

// const PostService = require("../services/post.service");
// /** @param {PostService} service  */
