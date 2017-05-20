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
  res.status(200);
  res.end();
};
exports.getPost = function(req, res) {
  res.status(200);
  res.end();
};
