const router = require("express").Router();
const { ViewPostAll, ViewIndexPost, SetPostContent } = require('../controllers/post');

router.get("/", async (req, res) => {
    try {
        const data = await ViewPostAll()
        res.render("main", { data });
    } catch (error) {
        res.send("메인 페이지 오류 발생");
    }
})

router.get("/insert", (req, res) => {
    res.render("insert")
})

router.post("/insert", async (req, res) => {
    try {
        const { title, content } = req.body;
        await SetPostContent(title, content);
    } catch (error) {
        res.send("내용 추가 오류 발생")
    }
})

module.exports = router;