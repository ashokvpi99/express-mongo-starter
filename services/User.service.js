var User = require('../models/User.model');

exports.getAlluser = (req, res ,next) => {
    User.find({}).sort({name: 1}).exec((err, data) => {
        if(err)
            res.status(400).send({success: false, message: 'Failed to get User'})
        else 
            res.status(200).send({success: true, message: 'User Fetched', data: data})
    })
}

exports.getUserById = (req, res ,next) => {
    User.findOne({_id: req.params.id}).exec((err, data) => {
        if(err)
            res.status(400).send({success: false, message: 'Failed to get User'})
        else 
            res.status(200).send({success: true, message: 'User Fetched', data: data})
    })
}

exports.saveUser = (req, res ,next) => {
    var user = new User(req.body);
    user.save((err, data) => {
        if(err)
            res.status(400).send({success: false, message: 'Failed to Create User'})
        else
            res.status(200).send({success: true, message: 'User Created', data: data})
    })
}

exports.updateUser = (req, res ,next) => {
    if(req.body)
        req.body.updatedDate = new Date();
    User.findByIdAndUpdate({_id: req.params.id}, req.body).exec((err, data) => {
        if(err)
            res.status(400).send({success: false, message: 'Failed to Update User'})
        else
            res.status(200).send({success: true, message: 'User Updated', data: data})
    })
}

exports.deleteUser = (req, res ,next) => {
    User.findByIdAndRemove({_id: req.params.id}).exec((err, data) => {
        if(err)
            res.status(400).send({success: false, message: 'Failed to Delete User'})
        else
            res.status(200).send({success: true, message: 'User Deleted', data: data})
    })
}