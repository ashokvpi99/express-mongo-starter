"use strict";

var sinon = require('sinon'), mongoose = require('mongoose'), should = require('should');

require('sinon-mongoose');

var StoreModel = require('../../models/Stores.model');
var UserModel = require('../../models/Users.model');
var StoreController = require('../../services/Stores.service');

var body = {"_id":"5bc7144afc5b274512e913b5","storeName":"aaa","storeAddress":"Nelson Manikam Road","storeEmail":"aaa@gmail.com","owner":"5bc70ae537984e37a389b928","storeContactNo":9854812342,"createdDate":"2018-10-17T10:51:54.150Z","updatedDate":"2018-10-17T10:51:54.150Z"};


describe('--------------- GET ALL STORES ---------------', function () {
    it('Get all stores', function () {

        let req = {}, res = {};

        var storeMock = sinon.mock(StoreModel)
        var getAllStoresQueryMock = storeMock
            .expects("find")
            .chain('sort', { storeName: 1 })
            .chain("exec")
            StoreController.getAllStores(req, res);
        sinon.assert.calledWith(getAllStoresQueryMock);
        storeMock.restore();
    });

});

describe('--------------- GET STORE BY ID ---------------', function () {
    it('Get store by id', function () {

        let req = {
            params: { id: '12345678'}
        }, 
        res = {};

        var storeMock = sinon.mock(StoreModel)
        var getUserByIdQueryMock = storeMock
            .expects("findById")
            .withArgs(req.params.id)
            .chain("exec")
            StoreController.getStoreById(req, res);
        sinon.assert.calledWith(getUserByIdQueryMock);
        storeMock.restore();
    });

});

describe('--------------- GET STORE BY USER ---------------', function () {
    it('Get store by user', function () {

        let req = {
            params: { id: '12345678'}
        }, 
        res = {};

        var UserMock = sinon.mock(UserModel)
        var getUserByIdQueryMock = UserMock
            .expects("findById")
            .withArgs(req.params.id)
            .chain('populate', 'stores')
            .chain("exec")
            StoreController.getStoresByUserId(req, res);
        sinon.assert.calledWith(getUserByIdQueryMock);
        UserMock.restore();
    });

});

describe('--------------- DELETE STORE BY ID---------------', function () {
    it('Delete store by id', function () {

        let req = {
            params: { id: '12345678'}
        }, 
        res = {};

        var storeMock = sinon.mock(StoreModel)
        var deleteUserQueryMock = storeMock
            .expects("findByIdAndRemove")
            .withArgs(req.params.id)
            StoreController.deleteStoreById(req, res);
        sinon.assert.calledWith(deleteUserQueryMock);
        storeMock.restore();
    });

});

describe('--------------- UPDATE STORE BY ID---------------', function () {
    it('Update Store by id', function () {

        let req = {
            params: { id: '12345678'},
            body: {
                storeName: 'ak'
            }
        }, 
        res = {};

        var storeMock = sinon.mock(StoreModel)
        var updateUserQueryMock = storeMock
            .expects("findByIdAndUpdate")
            .withArgs(req.params.id, req.body)
            StoreController.updateStoreById(req, res);
        sinon.assert.calledWith(updateUserQueryMock);
        storeMock.restore();
    });

});

// describe('--------------- SAVE USER---------------', function () {
//     it('Save user', function () {

//         let req = {
//             body: body
//         }, 

//         res = {};

//         var storeMock = sinon.mock(new StoreModel(body));
// 			var store = storeMock.object;

//         // var storeMock = sinon.mock(StoreModel)
//         var updateUserQueryMock = storeMock
//             .expects("save")
//             StoreController.saveStore(req, res);
//         sinon.assert.calledWith(updateUserQueryMock);
//         storeMock.restore();
//     });

// });