const express = require('express');
const router = express.Router();
const vocabService = require('../services/vocabService');

router.get('/', async (req, res) => {
  const search = req.query.search || '';
  const vocabs = await vocabService.getAll(search);
  res.render('index', { vocabs, searchQuery: search });
});

module.exports = router;
router.get('/flashcards', async (req, res) => {
    const vocabs = await vocabService.getAll();
    res.render('flashcards', { vocabs });
  });
  router.get('/random', vocabController.randomWord);
  router.post('/delete/:id', async (req, res) => {
    await Vocab.findByIdAndDelete(req.params.id);
    res.redirect('/');
  });
  