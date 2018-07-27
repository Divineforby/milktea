
// SETS UP ROUTER TO HANDLE TRANSACTIONS
var express = require('express');
var db = require('../db/database');
var router = express.Router();

// Gets the number of MT bought by user for friend
// fields
//  user
//  friend
router.post('/', (req, res) => {

  var body = req.body;
  // Gets the count for the user to friend tab
  db.query("SELECT count FROM friendship WHERE requested = :user AND addressed = :friend",
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

// Gets the tab between the people and who is owing
// fields
//  user
//  friend
router.post('/totalCount', (req, res) => {

  var body = req.body;
  // Gets the count for the user to friend tab
  db.query("SELECT * FROM friendship WHERE (requested = :user AND addressed = :friend) OR (requested = :friend AND addressed = :user)",
            body,
            (err, row) => {
              if(err) {
                console.log(err);
                res.send(err);
              }
              else {

                // Get the counts for both persons
                var first = row[0];
                var second = row[1];

                // Calculates total tab
                var total = Math.abs(first.count - second.count);

                // Finds out who owes who or if even
                var debt = "none";
                if( first.count < second.count ) {
                  debt = first.requested;
                }
                else if( first.count > second.count ) {
                  debt = second.requested;
                }

                res.send({total: total, debt: debt});
              }
            });
});

module.exports = router;
