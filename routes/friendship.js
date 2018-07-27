
// SETS UP ROUTER TO HANDLE TRANSACTIONS
var express = require('express');
var db = require('../db/database');
var router = express.Router();

// Returns a list of all :username friends
router.get('/:username', (req, res) => {
  // Find all friend of user
  var user = {username: req.params.username};

  // Query all friends of :username
  db.query("SELECT addressed FROM friendship WHERE requested = :username",
            user,
            (err, row) => {
              if(err) {
                console.log(err);
                res.send(err);
              }
              // Send back the array of friends
              else {
                var i;
                var friends = [];
                for ( i = 0; i < row.length; i++ ) {
                  friends.push(row[i].addressed);
                }
                console.log(friends);
                res.send(friends);
              }
            });
});

// Create a friend relation between requested and addressed
// Fields:
//  friendA
//  friendB
router.post('/makeFriend', (req, res) => {
  var user = req.body.friendA;
  var friend = req.body.friendB;

  // Friendship json to query, initial tab is 0
  var friendship = {
    user: user,
    friend: friend,
    count: 0
  }

  // Create friend relationship
  db.query("INSERT INTO friendship VALUES (:user, :friend, :count), (:friend, :user, :count)",
            friendship,
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
