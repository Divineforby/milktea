var sql = require('mariasql');

// Exports database for modularity and global scope
module.exports = new sql({
  host: '127.0.0.1',
  user: 'root',
  password: 'Maplestory23',
  db: 'mt'
});
