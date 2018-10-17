var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Types.ObjectId;

var storeSchema   = new Schema({
    storeName: { type: String },
    storeAddress: String,
    storeEmail: String,
    storeContactNo: Number,
    owner: { type: ObjectId, ref: 'Users', required: true },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now }
}, { collection: 'Stores' });

module.exports = mongoose.model('Stores', storeSchema);