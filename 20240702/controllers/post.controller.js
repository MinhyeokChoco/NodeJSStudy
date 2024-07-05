class PostController {
    constructor(postService) {
        this.postService = postService;
    }


    // async createPost(req, res) {
    //     const { title, content } = req.body;
    //     await this.postService.createPost(title, content);
    //     res.send("글 작성 완료");
    // }

    // async findPostAll(req, res) {
    //     const data = await this.postService.findPostAll();
    //     res.render("view", { data });
    // }

    // async findPostId(req, res) {
    //     const { id } = req.params;
    //     const data = await this.postService.findPostId(id);
    //     res.render("view", { data })
    // }

    // async updatePost(req, res) {
    //     const { id } = req.params;
    //     const data = await this.postService.updatePost(id);
    //     res.render("update", { data });
    // }

    // async deletePost(req, res) {
    //     const { id } = req.params;
    //     await this.postService.deletePost(id);
    //     res.redirect("/view");
    // }
}

module.exports = PostController;


// const { Posts } = require("../models");

// const post = {
//     // 블로그 작성
//     async createPost(title, content) {
//         try {
//             await Posts.create({ title, content })
//         } catch (error) {
//             return error;
//         }
//     },
//     // 블로그 글 전체 조회
//     async postSelectAll() {
//         try {
//             return await Posts.findAll();
//         } catch (error) {
//             return error;
//         }
//     },
//     // 블로그 글 선택 조회
//     async postSelectId(id) {
//         try {
//             return await Posts.findAll({ where: { id } });
//         } catch (error) {
//             return error;
//         }
//     },
//     // 블로그 글 수정
//     async postUpdate(id, title, content) {
//         try {
//             return await Posts.update({ id, title, content }, { where: { id } });
//         } catch (error) {
//             return error;
//         }
//     },
//     // 블로그 글 삭제
//     async postDelete(id) {
//         try {
//             return await Posts.destroy({ where: { id } })
//         } catch (error) {
//             return error;
//         }
//     }
// }

// module.exports = post;