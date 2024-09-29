'use strict';
import Routes from './routes';
import { server as _server } from '@hapi/hapi';

const init = async () => {

    const server = _server({
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