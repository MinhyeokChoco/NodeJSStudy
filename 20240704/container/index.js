class Container {
    services = {};

    register(name, definition, dependencie) {
        this.services[name] = { definition, dependencie };
    }

    get(name) {
        const service = this.services[name];
        if (!service.instance) {
            const dependencie = service.dependencie.map(el => this.get(el));
            service.instance = new service.definition(...dependencie);
        }
        return service.instance;
    }
}

module.exports = new Container();