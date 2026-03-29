const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserService {
    constructor(repository) {
        this.repository = repository;
    }

    async createUser(uid, upw, uname) {
        const user_pw = bcrypt.hashSync(upw, 10);
        this.repository.createUser(uid, user_pw, uname);
    }
    async userLogin(uid, upw) {
        const user = await this.repository.findUser(uid)
        console.log(uid, upw, user.upw)
        const user_pw = bcrypt.compareSync(upw, user.upw);
        if (user_pw) {
            return jwt.sign({ id: user.uid, name: user.uname }, "Hyeok", { expiresIn: "60m" });
        }
    }
}

module.exports = UserService;