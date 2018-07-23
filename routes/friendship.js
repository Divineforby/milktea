
// SETS UP ROUTER TO HANDLE TRANSACTIONS
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.send('THIS IS THE FRIENDSHIP PAGE');
})

module.exports = router;
