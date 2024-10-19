import { Auth0 } from '@auth0/auth0-spa-js';

class User {
    constructor(name, email, auth0) {
        this.name = name;
        this.email = email;
        this.auth0 = auth0;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }
}

module.exports = User;

