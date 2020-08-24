const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://<db_name>:<password>@<cluster>.mongodb.net/<db_name>?retryWrites=true&w=majority',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
    fileUrl: process.env.FILE_URL || 'http://localhost:3000/app/files/',
}

module.exports = config;
