class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async signup(uid, upw, uname) {
        await this.userRepository.createUser(uid, upw, uname);
    }

    async getUser(id) {
        return await this.userRepository.findUserId(id);
    }
}

module.exports = UserService;