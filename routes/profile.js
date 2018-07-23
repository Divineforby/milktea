
// SETS UP ROUTER TO HANDLE PROFILE INFO
var express = require('express');
var router = express.Router();

// Returns the profile for the user
router.get('/:username', (req, res) => {
  res.send(req.params.id);
});

module.exports = router;
