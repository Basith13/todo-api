const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

require('./models');
const routes = require('./routes');
const errorHandler = require('./handlers/error.handler');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

app.use(errorHandler);

if (process.env.MONGO_URI !== '') {
    mongoose.Promise = global.Promise;
    mongoose.connect(`${ process.env.MONGO_URI }`, { useCreateIndex: true, useNewUrlParser: true }).catch(() => {
        console.log('Unable to Estabilish Database Connection.'); // eslint-disable-line
        process.exit(-1);
    });
}

module.exports = app;
