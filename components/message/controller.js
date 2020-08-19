const store = require('./store');

const addMessage = (chat, user, message) => {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.error('[messageController]: Empty user or data')
            return reject('Invalid data');
        }
        const fullMessage = {
            chat: chat,
            user: user,
            message, message,
            date: new Date(),
        }
        store.add(fullMessage);
        return resolve(fullMessage);
    });
}

const getMessages = (filterUser) => {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser));
    });
}

const updateMessage = (id, message) => {
    return new Promise(async (resolve, reject) => {
        if (!id || !message) {
            reject('ivalidad data');
            return false;
        }
        const result = await store.updateMessage(id, message);
        resolve(result);
    });
}

const deleteMessage = (id) => {
    return new Promise(async (resolve, reject) => {
        if (!id) {
            reject('ivalidad id');
            return false;
        }
        const result = await store.deleteMessage(id);
        resolve(result);
    });
}
module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage,
}