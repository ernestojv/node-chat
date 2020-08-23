const store = require('./store');
const config = require('../../config');
const { socket } = require('../../socket');
const addMessage = (chat, user, message, file) => {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.error('[messageController]: Empty user or data')
            return reject('Invalid data');
        }

        let fileUrl = '';
        if (file) fileUrl = `${config.fileUrl}${file.filename}`;

        const fullMessage = {
            chat: chat,
            user: user,
            message, message,
            date: new Date(),
            file: fileUrl,
        }
        store.add(fullMessage);

        socket.io.emit('message', fullMessage);

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