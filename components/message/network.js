const express = require('express');
const multer = require('multer');
const path = require('path');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

const storage = multer.diskStorage({
    destination: "uploads/",
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() +
            path.extname(file.originalname))
    }
});
const upload = multer({ storage: storage });

router.get('/', async (req, res) => {
    try {
        const filterMessages = req.query.user || null;
        const result = await controller.getMessages(filterMessages);
        response.succes(req, res, result, 200);
    } catch (e) {
        response.error(req, res, 'Unexpected Error', 400, e);
    }


});

router.post('/', upload.single('file'), async (req, res) => {
    try {
        const result = await controller.addMessage(req.body.chat, req.body.user, req.body.message);
        response.succes(req, res, result, 201);
    } catch (e) {
        response.error(req, res, 'Invalid data', 400, e);
    }


});

router.patch('/:id', async (req, res) => {
    try {
        const result = await controller.updateMessage(req.params.id, req.body.message);
        response.succes(req, res, result, 201);
    } catch (e) {
        response.error(req, res, 'Internal error', 500, e);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const result = await controller.deleteMessage(req.params.id);
        response.succes(req, res, `Mensagge: ${req.params.id} deleted`);
    } catch (e) {
        response.error(req, res, 'Internal server error', 500, e);
    }
})

module.exports = router;