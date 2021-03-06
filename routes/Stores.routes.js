var express = require('express');
var router = express.Router();

var store = require('../services/Stores.service');

/* users api. */
router.get('/', store.getAllStores);
router.get('/:id', store.getStoreById);
router.get('/user/:id', store.getStoresByUserId);
router.post('/', store.saveStore);
router.put('/:id', store.updateStoreById);
router.delete('/:id', store.deleteStoreById);

module.exports = router;
