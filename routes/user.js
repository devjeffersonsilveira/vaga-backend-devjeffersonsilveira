// CREATE TABLE IF NOT EXISTS user (
//   idUser INTEGER constraint pk_user primary key,
//   nameUser TEXT
// );

var db = require('../db');
exports.createUser = function(req, res) {
  var idUser = req.body.id;
  var nameUser = req.body.name;
  if (idUser) {
    db.serialize(function() {
      db.run("insert into users(idUser, nameUser) values($id, $name)", {
        $id: idUser,
        $name: nameUser
      }, function(err, data) {
        if (err) {
          res.status(500);
          res.json(err);
        } else {
          res.status(202);
          res.json(data);
        }
      });
    });
  }
};
exports.getUser = function(req, res) {
  var idUser = req.query.id;
  db.serialize(function() {
    if (idUser) {
      db.get("Select * from users where idUser = $id;", {
        $id: idUser,
      }, function(err, row) {
        if (err) {
          res.status(500);
          res.json({
            "erro": err,
            "message": err.message,
            "stack": err.stack,
          });
        } else {
          res.json(row);
          res.status(200);
        }
      });
    }
  });
};
