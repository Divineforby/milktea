
// SETS UP ROUTER TO HANDLE PROFILE INFO
var express = require('express');
var router = express.Router();

// Returns the profile for the user
router.get('/:username', (req, res) => {
  var user = req.param.username;
  var body = {
    user: user
  }

  // Query the entire profile for the user
  db.query("SELECT * FROM accounts WHERE username = :username",
            body,
            (err, row) => {
              if(err) {
                console.log(err);
                res.send(err);
              }
              else {
                console.log(row);
                res.send(row);
              }
            });
});

module.exports = router;
