class Container {
    services = {};

    register(name, definition, dependencie) {
        this.services[name] = { definition, dependencie };
    }

    get(name) {
        const service = this.services[name];
        if (!service.instance) {
            const dependencies = service.dependencie.map(el => this.get(el));
            service.instance = new service.definition(...dependencies);
        }
        return service.instance;
    }
}

module.exports = new Container();