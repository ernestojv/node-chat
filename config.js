const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://db_nodechat:Ernesto07@cluster0-yuddw.mongodb.net/node-chat?retryWrites=true&w=majority',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
    fileUrl: process.env.FILE_URL || 'http://localhost:3000/app/files/',
}

module.exports = config;