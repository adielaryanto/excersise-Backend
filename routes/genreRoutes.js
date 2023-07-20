const express = require('express');
const router = express.Router();

const data = require('../lagu.json');

router.get('/', (req, res) => {
  res.json(data.genres);
});

router.get('/rockNRoll', (req, res) => {
  res.json(data.genres.rockNRoll);
});

module.exports = router;