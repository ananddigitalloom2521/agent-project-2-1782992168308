const express = require('express');
const router = express.Router();
const models = require('../models/index');

router.get('/', (req, res) => {
  res.status(200).send('Welcome to the API');
});

module.exports = router;