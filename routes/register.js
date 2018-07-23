// SETS UP ROUTER TO HANDLE REGISTRATION
var express = require('express');
var db = require('../db/database');
var crypto = require('crypto');
var router = express.Router();

// Logs an account into the database
// req fields:
//  username
//  password
//  firstname
//  lastname
router.post('/', (req, res) => {

  // Insert student into db if username is unique
  var body = req.body;
  // Returns the hash of user password and salt
  var saltpass = saltHash(body.password);

  // Create object of all user info
  var uinfo = {
      username: body.username,
      password: saltpass.hash,
      salt: saltpass.salt,
      firstname: body.firstname,
      lastname: body.lastname
  };

  db.query("INSERT INTO accounts (username, password, salt, firstname, lastname)\
            VALUES (:username, :password, :salt, :firstname, :lastname)",
            uinfo,
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

// Generates a salt and hash
var saltHash = (password) => {
  // Generates a random salt
  var salt = crypto.randomBytes(256).toString('hex').slice(0, 16);

  // Create hash object to digest password
  var hash = crypto.createHmac('sha512', salt);
  hash.update(password);

  // Get value of password and salt hash
  var value = hash.digest('hex');
  return {
    salt: salt,
    hash: value
  };
};

module.exports = router;
