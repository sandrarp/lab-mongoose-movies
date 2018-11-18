const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const celebSchema = new Schema({
  name: String,
  occupation: { type: String, default: 'Unknown' },
  catchPhrase: { type: String, required: true }
});

module.exports = mongoose.model('Celebrity',celebSchema);