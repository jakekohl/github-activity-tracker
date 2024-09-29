'use strict';
const Routes = require('./routes');
const Hapi = require('@hapi/hapi');

async function init() {

    const server = Hapi({
        port: 3000,
        host: 'localhost'
    });

    // Route registration
    const routes = Routes;
    Object.keys(routes).forEach((key) => {
        console.info(`Loading: ${key}`)
        routes[key].register(server);
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

/**
 * Start the Server
 */
(async () => {
    await init();
  })();