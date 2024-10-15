'use strict';

const Hapi = require('@hapi/hapi');
const dotenv = require('dotenv');
const routes = require('./routes');
const mongodb = require('mongodb');

dotenv.config();

// Hapi Server Options
const serverOptions = {
      "port": process.env.PORT || 3000,
      "host": process.env.HOST || "localhost",
  };

// Database Options
const dbUrl = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_ENDPOINT}` || 'mongodb://localhost:27017';



// Start the server
const init = async () => {

    console.info(`Starting server at ${new Date()}`);
    const server = Hapi.server(serverOptions);
    
    console.debug(dbUrl);

    // Establish connection to the database
    console.info(`Connecting to database ${process.env.MONGO_DB_NAME} at ${process.env.MONGO_DB_ENDPOINT}`);
    const client = new mongodb.MongoClient(dbUrl);

    // Register routes
    console.info('Registering routes');
    await server.register(routes);
    await server.start();
    console.log(`Server running on ${server.info.uri}`);
};

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();