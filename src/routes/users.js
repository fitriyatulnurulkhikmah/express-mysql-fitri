const express = require ('express');

const userController = require('../controller/users.js');

const router = express.Router();

router.post('/', userController.createNewUser);

router.get('/', userController.getAllUser);

router.patch('/:idUser', userController.updateUser);

module.exports = router;

