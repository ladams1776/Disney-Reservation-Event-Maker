require('dotenv').config();
const mongoose = require('mongoose');

const SERVER_AND_PORT = `${process.env.dbUser}:${process.env.dbPassword}@${process.env.dbUrl}:${process.env.dbPort}`;

const config = {
    db: `mongodb://${SERVER_AND_PORT}`,
    opts: {
        reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
        reconnectInterval: 5000,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
};

const connectWithRetry = () => {
    console.log('MongoDB connection with retry');
    return mongoose.connect(config.db, config.opts);
};

mongoose
    .connect(config.db, config.opts)
    .catch(() => setTimeout(connectWithRetry, 5000));

mongoose.Promise = global.Promise;
// @TODO: Need to auto set data
mongoose
    .connection
    .on('connected', () => {
        console.log(
            `Mongoose connection open on mongodb://${SERVER_AND_PORT}/reservations`,
        );
    })
    .on('error', err => {
        console.log(`Connection error: ${err.message}`);
    });