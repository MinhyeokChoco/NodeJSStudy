const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { login, signup, signupuid } = require('../models/user.models')

const join = {
    login: async (uid, upw) => {
        const check = await signupuid(uid)
        if (check === undefined)
            return false;
        const user_pw = await bcrypt.compareSync(upw, check.upw)
        if (login(uid, user_pw)) {
            return jwt.sign({ uid }, "hyeok", { expiresIn: "3m" });
        } else return false;
    },

    signup: async (uid, upw) => {
        const check = await signupuid(uid)
        const user_pw = await bcrypt.hashSync(upw, 10);
        if (check === undefined)
            return signup(uid, user_pw)
        return false;
    }
}

module.exports = join;