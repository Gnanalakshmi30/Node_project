const express = require('express');
const controller = require('../Controller/controller');
const router = express.Router();

router.post('/createUser', controller.createUser);
router.get('/getUserList', controller.getUserlist);

module.exports = router;