const container = require("./");
const UserModel = require("../models/user/user.model")
const UserRepository = require("../repositories/user.repositories");
const UserService = require("../services/user.service");
const UserController = require("../controllers/user.controller");

const PostModel = require("../models/post/post.model");
const PostRepository = require("../repositories/post.repositories");
const PostService = require("../services/post.service");
const PostController = require("../controllers/post.controller");

// 데이터베이스 모델
container.register("UserModel", UserModel, []);

// 레파지토리
container.register("UserRepository", UserRepository, ["UserModel"]);

// 서비스
container.register("UserService", UserService, ["UserRepository"]);

// 컨트롤러
container.register("UserController", UserController, ["UserService"]);



// 데이터베이스 모델
container.register("PostModel", PostModel, []);

// 레파지토리
container.register("PostRepository", PostRepository, ["PostModel"]);

// 서비스
container.register("PostService", PostService, ["PostRepository"]);

// 컨트롤러
container.register("PostController", PostController, ["PostService"]);

// const data = container.get("PostService");
// console.log(data.findPostAll)

module.exports = container;