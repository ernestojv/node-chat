const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const result = await controller.getMessages();
        response.succes(req, res, result, 200);
    } catch (e) {
        response.error(req, res, 'Unexpected Error', 400, e);
    }


});

router.post('/', async (req, res) => {
    try {
        const result = await controller.addMessage(req.body.user, req.body.message);
        response.succes(req, res, result, 201);
    } catch (e) {
        response.error(req, res, 'Invalid data', 400, e);
    }


});

router.patch('/:id', async (req, res) =>{
    try{
        const result = await controller.updateMessage(req.params.id, req.body.message);
        response.succes(req, res, result, 201);
    }catch(e){
        response.error(req, res, 'Internal error', 500, e);
    }
});

module.exports = router;