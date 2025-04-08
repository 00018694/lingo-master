const express = require('express');
const router = express.Router();
const vocabController = require('../controllers/vocabController');

router.get('/', vocabController.index);
router.get('/create', vocabController.createForm);
router.post('/create', vocabController.createWord);
router.get('/edit/:id', vocabController.editForm);
router.post('/edit/:id', vocabController.updateWord);

module.exports = router;
