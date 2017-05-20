var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('social.db');
var fs = require("fs");
fs.readFile("dbSchema.sql", function(err, data) {
  if (err) {
    console.error(err);
  } else {
    db.serialize(function() {
      db.exec(data.toString(), function(error) {
        if (error) {
          console.error(err);
        }
      });
    });
  }
});
module.exports = db;
