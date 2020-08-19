const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const result = await controller.addChat(req.body.users);
        response.succes(req, res, result, 201);
    } catch (error) {
        response.error(req, res, 'Internal server error', 500, e);
    }

});
router.get('/:userId', async (req, res) => {
    try {
        const result = await controller.listChats(req.params.userId);
        response.succes(req, res, result, 200);
    } catch (error) {
        response.error(req, res, 'Internal server error', 500, error);
    }
});

module.exports = router; 