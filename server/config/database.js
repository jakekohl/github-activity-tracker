const dotenv = require('dotenv');
dotenv.config();

const dbUrl = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_ENDPOINT}` || 'mongodb://localhost:27017';

const dbOptions = {
    "poolSize": 10,
    "rewrite": process.env.MONGO_DB_REWRITE || true,
    "autoReconnect": true,
    "reconnectTries": process.env.MONGO_DB_RECONNECT_ATTEMPTS || 30,
    "loggerLevel": process.env.MONGO_DB_LOGGER_LEVEL || 'error',
    "authMechanism": process.env.MONGO_DB_AUTH_MECHANISM || 'DEFAULT',
    "numberOfRetries": process.env.MONGO_DB_RETRIES || 5,
    "auto_reconnect": process.env.MONGO_DB_AUTO_RECONNECT || true,
    "timeout": process.env.MONGO_DB_TIMEOUT || 30000,
}

exports.modules = { dbUrl, dbOptions };