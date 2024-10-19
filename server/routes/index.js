import healthRoutes from './health.js';
//import pingRoutes from './ping.js';
import pullRoutes from './pull.js';
import userRoutes from './user.js';

const routesPlugin = {
    name: 'api-routes',
    version: '1.0.0',
    register: async function (server, options) {
        server.route(healthRoutes);
        //server.route(pingRoutes);
        server.route(pullRoutes);
        server.route(userRoutes);
    }
};

export default { routesPlugin };