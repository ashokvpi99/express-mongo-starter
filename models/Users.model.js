var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema   = new Schema({
    name: String,
    mobileNo: { type: Number },
    email: String,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now }
}, { collection: 'Users' });

module.exports = mongoose.model('Users', userSchema);