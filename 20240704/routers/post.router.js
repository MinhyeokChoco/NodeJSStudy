const router = require("express").Router();
const { upload } = require("../models/lib/middleware/imgUpload")
const container = require("../container/DI");

const postController = container.get("PostController");

router.get("/create", (req, res) => res.render("write"));
router.post("/create", upload.single("image"), (req, res) => postController.createPost(req, res));

router.get("/view", (req, res) => postController.findPostAll(req, res));

router.get("/update", (req, res) => res.render("update"));
router.post("/update", upload.single("image"), (req, res) => postController.updatePost(req, res));

router.get("/view", (req, res) => postController.deletePost(req, res));



module.exports = router;