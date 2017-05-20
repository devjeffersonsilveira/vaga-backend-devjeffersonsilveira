// CREATE TABLE IF NOT EXISTS friend (
//   idFriend INTEGER constraint pk_friend primary key,
//   idUser INTEGER,
//   nameFriend TEXT,
//   CONSTRAINT fk_userFriend FOREIGN KEY (idUser) REFERENCES user(idUser)
// );
var db = require('../db');
exports.createFriend = function(req, res) {
  var idUser = req.body.id;
  var idFriend = req.body.idFriend;
  if (idUser) {
    db.serialize(function() {
      db.run("insert into friends(idUser, idFriend) values($id, $idFriend)", {
        $id: idUser,
        $idFriend: idFriend
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
exports.getFriend = function(req, res) {
  var idUser = req.query.id;
  db.serialize(function() {
    if (idUser) {
      db.all("Select * from friends where idUser = $id;", {
        $id: idUser,
      }, function(err, row) {
        if (err) {
          res.status(500);
          console.error(err);
        } else {
          res.json(row);
          res.status(200);
        }
      });
    }
  });
};
