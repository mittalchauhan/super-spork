const mongoose = require('mongoose');
const { mongo_url } = require('../config');

mongoose
    .connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true, })
    .catch(e => {
        console.error('Connection error', e.message);
    });

const db = mongoose.connection;

module.exports = db;