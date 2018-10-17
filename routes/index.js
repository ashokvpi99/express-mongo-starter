var express = require('express');
var router = express.Router();
var user = require('./User.routes');
var store = require('./Stores.routes');

router.use('/user', user);
router.use('/store', store);

module.exports = router;