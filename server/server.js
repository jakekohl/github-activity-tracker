import Hapi from '@hapi/hapi';
import HapiMongo from 'hapi-mongodb';
import HapiAlive from 'hapi-alive';
//import routesPlugin from './routes/index.js';

// Hapi server options and monogodb connection options
import { serverOptions } from './config/server.js';
const dbUrl = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_ENDPOINT}` || 'mongodb://localhost:27017';


'use strict';

// Start the server
const init = async () => {
    console.info(`Starting server at ${new Date()}`);
    const server = Hapi.server(serverOptions);

    // Establish connection to the database
    console.info(`Connecting to database ${process.env.MONGO_DB_NAME} at ${process.env.MONGO_DB_ENDPOINT}`);
    console.debug(`Database URL: ${dbUrl}`);

    try {
        await server.register({
            plugin: HapiMongo,
            options: {
                url: dbUrl,
                settings: { 
                    readPreference: 'secondary',
                    retryWrites: true,
                    w: 'majority' 
                },
                decorate: true
            }
        });
        console.info('Connected to the database!');
    } catch (error) {
        console.error('Failed to connect to the database:', error);
        process.exit(1); // Kill the process
    };

    // Register routes
    console.info('Registering routes');
    await server.register({
        plugin: HapiAlive,
        options: {
            path: '/ping', 
            tags: ['health', 'monitor'],
            ping: async function(server) {
              return { 
                ok,
                time: new Date()
             };
            }
        }
    });
    //await server.register(routesPlugin);

    // Finally, start the server
    await server.start().then(() => {
        console.log(`Server running on ${server.info.uri}`);
    });
};

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();