const container = require("./");
const UserModel = require("../model/user.model");
const UserRepository = require("../repositories/user.repositories");
const UserService = require("../service/user.service")
const UserController = require("../controller/user.controller");

// 데이터베이스 모델
// 레파지토리
// 서비스
// 컨트롤러
// 왜? nestjs 사전 지식.

// 데이터베이스 모델
container.register("UserModel", UserModel, []);
// 주입할게 없어도 빈 배열을 넣어야 하는건지 여쭤보기

// 레파지토리
container.register("UserRepository", UserRepository, ["UserModel"]);

// 서비스
container.register("UserService", UserService, ["UserRepository"]);

// 컨트롤러
container.register("UserController", UserController, ["UserService"]);


module.exports = container;