import Hapi from '@hapi/hapi';
import HapiMongo from 'hapi-mongodb';
import './routes/index.js';

// Hapi server options and monogodb connection options
import { serverOptions } from './config/server.js';
import { dbUrl, databaseOptions } from './config/database.js';

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

    console.info('Registering routes');
    try {
        // Register the routes
        await server.register(routesPlugin);
        console.info('Routes registered');
    } catch (error) {
        console.error('Failed to register routes:', error);
        process.exit(1); // Kill the process
    }

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