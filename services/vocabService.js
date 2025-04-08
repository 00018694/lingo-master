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
// services/vocabService.js
let vocabList = [];

function getAll() {
  return vocabList;
}

function getById(id) {
  return vocabList.find(item => item.id === id);
}

function create(word, meaning, example) {
  const newItem = {
    id: Date.now().toString(),
    word,
    meaning,
    example
  };
  vocabList.push(newItem);
  return newItem;
}

function update(id, updatedItem) {
  const index = vocabList.findIndex(item => item.id === id);
  if (index !== -1) {
    vocabList[index] = { id, ...updatedItem };
    return true;
  }
  return false;
}

function remove(id) {
  const index = vocabList.findIndex(item => item.id === id);
  if (index !== -1) {
    vocabList.splice(index, 1);
    return true;
  }
  return false;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
