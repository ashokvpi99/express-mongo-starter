var express = require('express');
var router = express.Router();

var user = require('../services/User.service');

/* users api. */
router.get('/', user.getAlluser);
router.get('/:id', user.getUserById);
router.post('/', user.saveUser);
router.put('/:id', user.updateUser);
router.delete('/:id', user.deleteUser);

module.exports = router;
