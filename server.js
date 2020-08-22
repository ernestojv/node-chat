const express = require('express');
const app = express();
const server = require('http').Server(app);
const db = require('./db');
db.connect();
app.use('/app', express.static('public'));
const socket = require('./socket');
const router = require('./network/routes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

socket.connect(server);

router(app);

server.listen(3000, () => {
    console.log("Listening http://localhost:3000");
});