const router = require('express').Router();
const { upload } = require("../lib/imgUpload");

router.post("/", upload.single("upload"), (req, res) => {
    res.send("파일 업로드 완료")
})

module.exports = router;