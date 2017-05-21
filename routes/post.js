var db = require('../db');
// cria post
exports.createPost = function(req, res) {
  var idUser = req.body.id;
  var desPost = req.body.post;
  db.serialize(function() {
    if (idUser) {

      db.run("insert into posts (idUser, datPost,desPost) values($idUser,$datPost, $desPost)", {
        $idUser: idUser,
        $datPost: new Date(),
        $desPost: desPost
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
          message: "post adicionado!",
          data
        });
      });
    }else {
      res.send({
        message: "Sem id!"
      });
    }
  });
};
// retorna posts dos amigos dum usuario
exports.getPosts = function(req, res) {
  var idUser = req.query.id;
  db.serialize(function() {
    if (idUser) {

      var stmt = "select posts.idUser, posts.desPost, posts.datPost ";
      stmt += "from posts, friends ";
      stmt += "where posts.idUser = friends.idFriend and friends.idUser = $id ";
      stmt += "order by datPost desc limit 50;";

      db.all(stmt, {
        $id: idUser
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
// retorna posts dum usuário
exports.getPost = function(req, res) {
  var idUser = req.params.id;
  db.serialize(function() {
    if (idUser) {
      db.all("select idUser, desPost, datPost from posts where idUser = $id order by datPost desc limit 50", {
        $id: idUser
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
