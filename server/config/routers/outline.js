const express = require('express');

const router = new express.Router();

router.route('/')
  .get((req, res) => {
    res.end('hello world');
  });

module.exports = router;
