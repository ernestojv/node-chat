const { response } = require('express');
const express = require('express');

const app = express();

const router = require('./network/routes');

app.use(express.json());
app.use(express.urlencoded({extended : false}));

router(app);

app.listen(3000, () => {
    console.log("Listening http://localhost:3000");
});