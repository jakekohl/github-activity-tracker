import { userGetRoutes, userPostRoutes } from './user.js';

const routesPlugin = {
    name: 'api-routes',
    register: async function (server, options) {
        console.info('Registering user routes');
        console.debug('Routes:', JSON.stringify(userGetRoutes));
        server.route(userGetRoutes);
        console.debug('Routes:', JSON.stringify(userPostRoutes));
        server.route(userPostRoutes);
    }
};

export default routesPlugin;