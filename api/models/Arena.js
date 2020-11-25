const mongoose = require('mongoose');

const ArenaSchema = mongoose.Schema({
  _id: Number,
  arena: { type: Array, "default": [] },
})

module.exports = mongoose.model('Arena', ArenaSchema);