let data = [
    { id: 1, word: "hello", meaning: "a greeting" },
    { id: 2, word: "world", meaning: "the earth, or everyone" },
  ];
  
  exports.getAll = () => data;
  
  exports.getById = (id) => data.find(w => w.id == id);
  
  exports.add = (newWord) => {
    const id = Date.now();
    data.push({ id, ...newWord });
  };
  
  exports.update = (id, updated) => {
    const index = data.findIndex(w => w.id == id);
    if (index !== -1) {
      data[index] = { id: Number(id), ...updated };
    }
  };
  const Vocab = require('../models/vocab');

  async function getAll(search = '') {
    const query = search
      ? { word: { $regex: new RegExp(search, 'i') } }
      : {};
    return await Vocab.find(query);
  }
  
  module.exports = {
    getAll,
    // other functions...
  };
   