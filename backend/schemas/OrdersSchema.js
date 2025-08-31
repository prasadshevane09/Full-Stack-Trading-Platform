const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  qty: {
    type: Number,
    required: true,
    min: 1
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  mode: {
    type: String,
    required: true,
    enum: ['BUY', 'SELL'],
    uppercase: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const OrdersModel = mongoose.model('Orders', ordersSchema);

module.exports = { OrdersModel };