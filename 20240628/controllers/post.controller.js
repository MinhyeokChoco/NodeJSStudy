const { Posts } = require("../models");

const post = {
    async create(user_name, content) {
        try {
            await Posts.create({
                user_name, content
            })
        } catch (error) {
            return error;
        }
    },

    async postSelectIndex(id) {
        try {
            return await Posts.findAll({ where: { id } })
        } catch (error) {
            return error;
        }
    },

    async postSelectAll() {
        try {
            return await Posts.findAll();
        } catch (error) {
            return error;
        }
    },

    async postUpdate(id, content) {
        try {
            return await Posts.update({ content }, { where: { id } });
        } catch (error) {
            return error;
        }
    },

    async postDelete(id) {
        try {
            return await Posts.destroy({ where: { id } })
        } catch (error) {
            return error;
        }
    }
}

module.exports = post;