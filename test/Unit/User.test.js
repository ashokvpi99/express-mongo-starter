"use strict";

var sinon = require('sinon'), mongoose = require('mongoose'), should = require('should');

require('sinon-mongoose');

var UserModel = require('../../models/Users.model');
var UserController = require('../../services/User.service');

var body = { "_id": "5bc70ad0bd126b379b7e570b", "name": "Ashsok", "mobileNo": 23423534234, "email": "ashsok@gmail.com", "stores": ["5bc717e38a843c4af002c0bd", "5bc717f8185f884afcdb494a"], "createdDate": "2018-10-17T10:11:28.486Z", "updatedDate": "2018-10-17T10:11:28.486Z" };


describe('--------------- GET ALL USERS ---------------', function () {
    it('Get all users', function () {

        let req = {}, res = {};

        var userMock = sinon.mock(UserModel)
        var getAllUserQueryMock = userMock
            .expects("find")
            .chain("exec")
            UserController.getAlluser(req, res)
        sinon.assert.calledWith(getAllUserQueryMock)
        userMock.restore();
    });

});

describe('--------------- FIND USER BY ID ---------------', function () {
    it('Get user by id', function () {

        let req = {
            params: { id: '12345678'}
        }, 
        res = {};

        var userMock = sinon.mock(UserModel)
        var getUserByIdQueryMock = userMock
            .expects("findOne")
            .withArgs({ _id: req.params.id})
            .chain("exec")
            UserController.getUserById(req, res);
        sinon.assert.calledWith(getUserByIdQueryMock);
        userMock.restore();
    });

});

describe('--------------- DELETE USER BY ID---------------', function () {
    it('Delete user by id', function () {

        let req = {
            params: { id: '12345678'}
        }, 
        res = {};

        var userMock = sinon.mock(UserModel)
        var deleteUserQueryMock = userMock
            .expects("findByIdAndRemove")
            .withArgs({ _id: req.params.id})
            .chain("exec")
            UserController.deleteUser(req, res);
        sinon.assert.calledWith(deleteUserQueryMock);
        userMock.restore();
    });

});

describe('--------------- UPDATE USER BY ID---------------', function () {
    it('Update user by id', function () {

        let req = {
            params: { id: '12345678'},
            body: {
                name: 'ak'
            }
        }, 
        res = {};

        var userMock = sinon.mock(UserModel)
        var updateUserQueryMock = userMock
            .expects("findByIdAndUpdate")
            .withArgs({ _id: req.params.id}, req.body)
            .chain("exec")
            UserController.updateUser(req, res);
        sinon.assert.calledWith(updateUserQueryMock);
        userMock.restore();
    });

});

// describe('--------------- SAVE USER---------------', function () {
//     it('Save user', function () {

//         let req = {
//             body: body
//         }, 

//         res = {};

//         var userMock = sinon.mock(new UserModel(body))
//         var user = userMock.object;
//         var updateUserQueryMock = userMock
//             .expects("save")
//             UserController.saveUser(req, res);
//         sinon.assert.calledWith(updateUserQueryMock);
//         userMock.restore();
//     });

// });

describe('Save User test', function () {
		
    it('Should call save only once', function () {
        var saveStub = sinon.stub();
        function User(){
            this.save = saveStub
        }
        var req = {
            body: body
        }
        var res = {}, next = {};
        var UserController = require('../../services/User.service');
        UserController.saveUser(req, res)(User);
        sinon.assert.calledOnce(saveStub);
    });

    // it('Should save todo', function (done) {
    //     var userMock = sinon.mock(new UserModel(body));
    //     var user = userMock.object;

    //     userMock
    //     .expects('save')
    //     .yields(null, 'SAVED');

    //     todo.save(function(err, result) {
    //         todoMock.verify();
    //         todoMock.restore();
    //         should.equal('SAVED', result, "Test fails due to unexpected result")
    //         done();
    //     });
    // });

});