const mongoose = require('mongoose');

const holdingsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  qty: {
    type: Number,
    required: true
  },
  avg: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  net: {
    type: String,
    default: "0%"
  },
  day: {
    type: String,
    default: "0%"
  }
});

const HoldingsModel = mongoose.model('Holdings', holdingsSchema);

module.exports = { HoldingsModel };