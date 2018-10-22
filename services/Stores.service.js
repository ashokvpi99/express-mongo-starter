var store = require('../models/Stores.model');
var user = require('../models/Users.model');
var ObjectId = require('mongoose').Types.ObjectId;

exports.getAllStores = (req, res) => {
    store.find({}).sort({ storeName: 1 }).exec((err, response) => {
        if (err)
            res.status(400).send({ success: false, error: err, message: 'Get All Stores Failed' });
        else
            res.status(200).send({ success: true, message: 'Get All Stores Success', data: response });
    })
}

exports.getStoreById = (req, res) => {
    store.findById(req.params.id).exec((err, response) => {
        if (err)
            res.status(400).send({ success: false, error: err, message: 'Get Store By Id Failed' });
        else
            res.status(200).send({ success: true, message: 'Get Store By Id Success', data: response });
    })
}

exports.saveStore = (req, res) => {
    var storeObj = new store(req.body);
    storeObj.save((err, status) => {
        if (err)
            res.status(400).send({ success: false, error: err, message: 'Save Store Failed' });
        else
            res.status(200).send({ success: true, message: 'Save Store Success', data: status });
    })
}

exports.updateStoreById = (req, res) => {
    var updateObj = req.body;
    store.findByIdAndUpdate(req.params.id, updateObj, (err, response) => {
        if (err)
            res.status(400).send({ success: false, error: err, message: 'Update Store Failed' });
        else
            res.status(200).send({ success: true, message: 'Update Store Success', data: response });
    })
}

exports.deleteStoreById = (req, res) => {
    store.findByIdAndRemove(req.params.id, (err, response) => {
        if (err)
            res.status(400).send({ success: false, error: err, message: 'Delete Store Failed' });
        else
            res.status(200).send({ success: true, message: 'Delete Store Success', data: response });
    })
}

exports.getStoresByUserId = (req, res) => {
    user.findById(req.params.id).populate('stores').exec((err, response) => {
        if (err)
            res.status(400).send({ success: false, error: err, message: 'Get Store By UserId Failed' });
        else
        {
            let stores = response && response.stores;
            res.status(200).send({ success: true, message: 'Get Store By UserId Success',  stores});
        }
    })
}