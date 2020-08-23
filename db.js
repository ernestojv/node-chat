const db = require('mongoose');
const config = require('./config');
db.Promise = global.Promise;
const connect = async () => {
    await db.connect(config.dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

module.exports = {connect};