class UserController {
    constructor(service) {
        this.service = service;
    }

    async signup(req, res) {
        const { uid, upw, uname } = req.body;
        await this.service.createUser(uid, upw, uname);
        res.redirect("/login");
    }

    async userLogin(req, res) {
        const { uid, upw } = req.body;
        const jwt = await this.service.userLogin(uid, upw);
        if (jwt) {
            res.cookie("loginToken", jwt, { httpOnly: true, maxAge: 1000 * 60 * 60 });
            res.redirect("/post/view");
        } else {
            res.send("로그인 실패");
        }
    }
}

module.exports = UserController;