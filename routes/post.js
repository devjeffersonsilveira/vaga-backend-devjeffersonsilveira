// CREATE TABLE IF NOT EXISTS post (
//   idPost INTEGER constraint pk_post primary key,
//   idUser INTEGER,
//   idFriend INTEGER,
//   datPost DATE,
//   desPost TEXT,
//   bolSelf BOOLEAN,
//   CONSTRAINT fk_userPost FOREIGN KEY (idUser) REFERENCES user(idUser)
//   CONSTRAINT fk_friendPost FOREIGN KEY (idFriend) REFERENCES friend(idFriend)
// );
var db = require('../db');
exports.createPost = function(req, res) {

  var idUser = req.body.id;
  var desPost = req.body.post;
  db.serialize(function() {
    db.run("insert into posts (idUser, datPost,desPost) values($idUser,$datPost, $desPost)", {
      $idUser: idUser,
      $datPost: Date.now(),
      $desPost: desPost
    }, function(err, data) {
      if (err) {
        res.status(500);
        res.json({
          "erro": err,
          "message": err.message,
          "stack": err.stack,
        });
      } else {
        res.status(202);
        res.json(data);
      }
    });
  });
};
exports.getPost = function(req, res) {
  var idUser = req.query.id;
  var bolSelf = req.query.self;
  db.serialize(function() {
    if (bolSelf) {
       db.all("select idUser, desPost, datPost from posts where idUser = ? order by datPost desc limit 50", idUser, function(err, data) {
        if (err) {
          res.status(500);
          res.json({
            "erro": err,
            "message": err.message,
            "stack": err.stack,
          });
        } else {
          res.json(data);
        }
      });
    } else {
      var stmt = "select posts.idUser, posts.desPost, posts.datPost ";
      stmt += "from posts, friends ";
      stmt += "where posts.idUser = friends.idFriend and friends.idUser = $id ";
      stmt += "order by datPost desc limit 50;";

      db.all(stmt, {
        $id: idUser
      }, function(err, data) {
        if (err) {
          res.status(500);
          res.json({
            "erro": err,
            "message": err.message,
            "stack": err.stack,
          });
        } else {
          res.json(data);
        }
      });
    }
  });
};
