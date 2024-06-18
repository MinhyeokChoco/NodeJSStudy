const { posts } = require("../models");

exports.ViewPostAll = async () => {
    try {
        const data = await posts.getViewPostAll();
        return data;
    } catch (error) {
        console.log("err : controller view post all")
    }
}

exports.ViewIndexPost = async (id) => {
    try {
        const data = await posts.getSelectIndexPost(id);
        return data;
    } catch (error) {
        console.log("err : controller view post index");
    }
}

exports.SetPostContent = async (title, content) => {
    try {
        await posts.SetPostContent(title, content);
    } catch (error) {
        console.log("err : controller set post content")
    }
}