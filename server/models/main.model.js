const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    size: {type: String, required: true},
    type: {type: String, required: true},
    toppings: {type: String, required: true},
    total: {type: String, required: true}
});


// Export the model
module.exports = mongoose.model('OrderPizza', OrderSchema);
