const store = require('./store');

const addMessage = (user, message) => {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.error('[messageController]: Empty user or data')
            return reject('Invalid data');
        }
        const fullMessage = {
            user: user,
            message, message,
            date: new Date(),
        }
        store.add(fullMessage);
        return resolve(fullMessage);
    });
}

const getMessages = () => {
    return new Promise((resolve, reject) => {
        resolve(store.list());
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
    })
}
module.exports = {
    addMessage,
    getMessages,
    updateMessage,
}