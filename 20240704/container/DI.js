const container = require("./");
const UserModel = require("../models/user/user.model");
const UserRepository = require("../repositories/user.repository");
const UserService = require("../services/user.service");
const UserController = require("../controllers/user.controller");

const PostModel = require("../models/post/post.model");
const PostRepository = require("../repositories/post.repository");
const PostService = require("../services/post.service");
const PostController = require("../controllers/post.controller");

container.register("UserModel", UserModel, []);
container.register("UserRepository", UserRepository, ["UserModel"]);
container.register("UserService", UserService, ["UserRepository"]);
container.register("UserController", UserController, ["UserService"]);


container.register("PostModel", PostModel, []);
container.register("PostRepository", PostRepository, ["PostModel"]);
container.register("PostService", PostService, ["PostRepository"]);
container.register("PostController", PostController, ["PostService"]);

module.exports = container;

// 실행 컨텍스트로 레지스터 메서드 문자열 파악하기 위해 그리기