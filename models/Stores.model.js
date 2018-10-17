var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var storeSchema   = new Schema({
    storeName: { type: String },
    storeAddress: String,
    storeEmail: String,
    storeContactNo: Number,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now }
}, { collection: 'Stores' });

module.exports = mongoose.model('Stores', storeSchema);