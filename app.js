'use strict';
const Routes = require('./routes');
const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi({
        port: 3000,
        host: 'localhost'
    });

    // Route registration
    const routes = Routes;
    Object.keys(routes).forEach((key) => {
        routes[key].register(server);
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();