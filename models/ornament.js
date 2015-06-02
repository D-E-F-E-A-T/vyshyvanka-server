var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrnamentSchema = new Schema({
    operations: Array,
    currentOperation: Number
});

module.exports = mongoose.model('Ornament', OrnamentSchema);
