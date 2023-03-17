const mongoose = require('mongoose');

mongoose
    .connect('mongodb+srv://saritadpandey2016:sarita123@cluster0.lbybxew.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true, })
    .catch(e => {
        console.error('Connection error', e.message);
    });

const db = mongoose.connection;

module.exports = db;