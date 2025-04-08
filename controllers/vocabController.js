const vocabService = require('../services/vocabService');

exports.index = (req, res) => {
  const vocabList = vocabService.getAll();
  res.render('index', { vocabList });
};

exports.createForm = (req, res) => {
  res.render('create');
};

exports.createWord = (req, res) => {
  const { word, meaning } = req.body;
  vocabService.add({ word, meaning });
  res.redirect('/');
};

exports.editForm = (req, res) => {
  const word = vocabService.getById(req.params.id);
  res.render('edit', { word });
};

exports.updateWord = (req, res) => {
  const { word, meaning } = req.body;
  vocabService.update(req.params.id, { word, meaning });
  res.redirect('/');
};
// Show a random vocab word
exports.randomWord = async (req, res) => {
    try {
      const words = await vocabService.getAllVocab();
      const random = words[Math.floor(Math.random() * words.length)];
      res.render('random', { word: random });
    } catch (err) {
      res.status(500).send('Error fetching word');
    }
  };
  