import { userGetRoutes, userPostRoutes } from './user.js';
import { pullRoutes } from './pull.js';

const routesPlugin = {
    name: 'api-routes',
    register: async function (server, options) {
        console.info('Registering user routes');
        console.debug('Routes:', JSON.stringify(userGetRoutes));
        server.route(userGetRoutes);
        console.debug('Routes:', JSON.stringify(userPostRoutes));
        server.route(userPostRoutes);
        console.info('Registering pull routes');
        console.debug('Routes:', JSON.stringify(pullRoutes));
        server.route(pullRoutes);
    },
};

export default routesPlugin;