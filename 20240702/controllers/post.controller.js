const { Posts } = require("../models");

const post = {
    // 블로그 작성
    async postCreate(title, content) {
        try {
            await Posts.create({ title, content })
        } catch (error) {
            return error;
        }
    },
    // 블로그 글 전체 조회
    async postSelectAll() {
        try {
            return await Posts.findAll();
        } catch (error) {
            return error;
        }
    },
    // 블로그 글 선택 조회
    async postSelectId(id) {
        try {
            return await Posts.findAll({ where: { id } });
        } catch (error) {
            return error;
        }
    },
    // 블로그 글 수정
    async postUpdate(id, title, content) {
        try {
            return await Posts.update({ id, content }, { where: { id } });
        } catch (error) {
            return error;
        }
    },
    // 블로그 글 삭제
    async postDelete(id) {
        try {
            return await Posts.destroy({ where: { id } })
        } catch (error) {
            return error;
        }
    }
}

module.exports = post;