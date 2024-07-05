class UserRepository {
    constructor(database) {
        this.database = database;
    }

    async createUser(uid, upw, uname) {
        await this.database.createUser(uid, upw, uname);
    }

    async findUser(uid) {
        return await this.database.findUser(uid);
    }

}

module.exports = UserRepository;