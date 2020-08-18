const db = require('mongoose');
const Model = require('./model');
db.Promise = global.Promise;
db.connect('mongodb+srv://db_nodechat:Ernesto07@cluster0-yuddw.mongodb.net/node-chat?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
console.log('[db] successful connection')
const addMessage = (message) => {
    const myMessage = new Model(message);
    myMessage.save();
}

const getMessages = async () => {
    const messages = await Model.find();
    return messages;
}
const updateMessage = async (id, message) => {
    const updatedMessage = await Model.findOneAndUpdate({ _id: id }, { message }, { new: true });
    return updatedMessage;
}
module.exports = {
    add: addMessage,
    list: getMessages,
    updateMessage: updateMessage,
}