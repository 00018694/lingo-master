const mongoose = require('mongoose');

const vocabSchema = new mongoose.Schema({
  word: String,
  translation: String,
  category: String
});

module.exports = mongoose.model('Vocab', vocabSchema);
