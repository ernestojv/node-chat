const store = require('./store');

const addUser = (name) => {
    return new Promise((resolve, reject) => {
        if (!name) {
            console.error('[messageController]: Empty user')
            return reject('Invalid data');
        }
        const user = {
            name,
        }
        store.add(user);
        return resolve(user);
    });
}
const getUsers = () => {
        return store.list();
}
module.exports = {
    addUser,
    getUsers,
}