const db = require('mongoose');
db.Promise = global.Promise;
const connect = async () => {
    await db.connect('mongodb+srv://db_nodechat:Ernesto07@cluster0-yuddw.mongodb.net/node-chat?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

module.exports = {connect};