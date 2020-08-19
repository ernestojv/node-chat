
const Model = require('./model');
const { populate } = require('./model');
console.log('[db] successful connection')
const addMessage = (message) => {
    const myMessage = new Model(message);
    myMessage.save();
}

const getMessages = async (filterUser) => {
    return new Promise((resolve, reject) => {
        let filter = {};
        if (filterUser !== null) {
            filter = { user: filterUser };
        }
        Model.find(filter)
            .populate('user')
            .exec((error, populated) => {
                if (error) {
                    reject(error);
                    return false;
                }
                resolve(populated);
            });
    });

}
const updateMessage = async (id, message) => {
    const updatedMessage = await Model.findOneAndUpdate({ _id: id }, { message }, { new: true });
    return updatedMessage;
}

const deleteMessage = async (id) => {
    const result = await Model.deleteOne({ _id: id });
    return result;
}
module.exports = {
    add: addMessage,
    list: getMessages,
    updateMessage: updateMessage,
    deleteMessage: deleteMessage,
}