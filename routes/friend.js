var db = require('../db');
// cria amigo
exports.createFriend = function(req, res) {
  var idUser = req.body.id;
  var idFriend = req.body.idFriend;
  if ((idUser && idFriend) && (idUser != idFriend)) {
    db.serialize(function() {
      var stmt = "insert into friends(idUser, idFriend) values($id, $idFriend),($idFriend, $id); ";
      db.run(stmt, {
        $id: idUser,
        $idFriend: idFriend
      }, function(err, data) {
        if (err) {
          res.send({
            code: err.code,
            errno: err.errno,
            message: err.message,
            stack: err.stack
          });
        }
        res.json({
          message: "Amigo adicionado!",
          data
        });
      });
    });
  } else {
    res.send({
      message: "Sem id's ou id's iguais!"
    });
  }
};
// retorna lista de amigos
exports.getFriends = function(req, res) {
  var idUser = req.query.id;
  db.serialize(function() {
    if (idUser) {
      var stmt = "Select users.idUser, users.nameUser ";
      stmt += " from users, friends ";
      stmt += "where users.idUser = friends.idFriend and  friends.idUser = $id;";
      db.all(stmt, {
        $id: idUser,
      }, function(err, data) {
        if (err) {
          res.send({
            code: err.code,
            errno: err.errno,
            message: err.message,
            stack: err.stack
          });
        }
        res.json(data);
      });
    } else {
      res.send({
        message: "Sem id!"
      });
    }
  });
};
