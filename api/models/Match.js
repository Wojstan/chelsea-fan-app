const mongoose = require('mongoose');

const MatchSchema = mongoose.Schema({
  _id: Number,
  lineup: { type: Array, "default": [] },
  ratings: { type: Array, "default": [] },
  goals: { type: Array, "default": [] },
})

module.exports = mongoose.model('Match', MatchSchema);