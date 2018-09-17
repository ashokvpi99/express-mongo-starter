var express = require('express');
var router = express.Router();
var user = require('./User.routes');

router.use('/user', user);

module.exports = router;
