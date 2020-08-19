const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const result = await controller.addUser(req.body.name);
        response.succes(req, res, result, 201);
    } catch (error) {
        response.error(req, res, 'Internal server error', 500, error);
    }
});
router.get('/', async (req, res)=>{
    try {
        const result = await controller.getUsers();
        response.succes(req, res, result, 200);
    } catch (error) {
        response.error(req, res, 'Internal server error', 500, error);
    }
})
module.exports = router;