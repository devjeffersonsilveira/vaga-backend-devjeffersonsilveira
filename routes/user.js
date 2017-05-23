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
          res.send({
            code: err.code,
            errno: err.errno,
            message: err.message,
            stack: err.stack
          });
          return;
        }
        res.json({
          message: "Usuário adicionado!",
          data
        });
      });
    });
  } else {
    res.send({
      message: "Sem id!"
    });
  }
};
// retorna lista de usuarios
exports.getUsers = function(req, res) {
  db.serialize(function() {
    db.all("Select * from users", function(err, data) {
      if (err) {
        res.send({
          code: err.code,
          errno: err.errno,
          message: err.message,
          stack: err.stack
        });
        return;
      }
      res.json(data);
    });
  });
};

// retorna dados dum usuario
exports.getUser = function(req, res) {
  var idUser = req.params.id;
  db.serialize(function() {
    if (idUser) {
      db.get("Select * from users where idUser = $id;", {
        $id: idUser,
      }, function(err, data) {
        if (err) {
          res.send({
            code: err.code,
            errno: err.errno,
            message: err.message,
            stack: err.stack
          });
          return;
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
