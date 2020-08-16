const express = require('express');
const router = express.Router();
const app = express();
app.use(router);
app.listen(3000, () => {
    console.log("Listening http://localhost:3000");
});