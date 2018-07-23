// SETS UP ROUTER TO HANDLE LOGIN AUTH
var express = require('express');
var db = require('../db/database');
var crypto = require('crypto');
var router = express.Router();

// Check to see if account exists, if so check if password matches
// req fields:
//  username
//  password
// Note: If select is empty send code: 0
router.post('/', (req, res) => {
    var body = req.body;

    // Queries the account throughh the username
    db.query("SELECT * FROM accounts WHERE username = :username;",
              body,
              (err, row) => {
                if(err) {
                  console.log(err);
                  res.send(err);
                }
                // If no error hash the password to see if match
                else {
                  // Empty select aka "account DNE"
                  if(row.length == 0) {
                    res.send({"code": 0});
                  }
                  // Otherwise check
                  else {
                    // Get the salt and password
                    row = row[0];
                    var salt = row.salt;
                    var refpass = row.password;

                    // Create hash object to digest password
                    var hash = crypto.createHmac('sha512', salt);
                    hash.update(body.password);

                    // Digest the hash
                    var checkpass = hash.digest('hex');

                    // Check if the reference and the submitted are equivalent
                    var passmatch = (refpass === checkpass);
                    console.log(row);
                    res.send({bool: passmatch});
                  }
                }
              })
})

module.exports = router;
