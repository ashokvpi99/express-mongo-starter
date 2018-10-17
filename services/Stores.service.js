var store = require('../models/Stores.model');

exports.getAllStores = (req, res) => {
    store.find({}).sort({storeName: 1}).exec((err, response) => {
        if(err)
            res.status(400).send({success: false, error: err, message: 'Get All Stores Failed'});
        else
            res.status(200).send({success: true, message: 'Get All Stores Success', stores: response});
    })
}

exports.getStoreById = (req, res) => {
    store.findById(req.params.id, (err, response) => {
        if(err)
            res.status(400).send({success: false, error: err, message: 'Get Store By Id Failed'});
        else
            res.status(200).send({success: true, message: 'Get Store By Id Success', store: response});
    })
}

exports.saveStore = (req, res) => {
    var storeObj = new store(req.body);
    storeObj.save((err, status) => {
        if(err)
            res.status(400).send({success: false, error: err, message: 'Save Store Failed'});
        else
            res.status(200).send({success: true, message: 'Save Store Success', data: status});
    })
}

exports.updateStoreById = (req, res) => {
    var updateObj = req.body;
    store.findByIdAndUpdate(req.params.id, updateObj, (err, response) => {
        if(err)
            res.status(400).send({success: false, error: err, message: 'Update Store Failed'});
        else
            res.status(200).send({success: true, message: 'Update Store Success', data: response});
    })
}

exports.deleteUserById = (req, res) => {
    store.findByIdAndRemove(req.params.id, (err, response) => {
        if(err)
            res.status(400).send({success: false, error: err, message: 'Delete Store Failed'});
        else
            res.status(200).send({success: true, message: 'Delete Store Success', data: response});
    })
}