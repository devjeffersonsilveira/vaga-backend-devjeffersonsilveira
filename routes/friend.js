// CREATE TABLE IF NOT EXISTS friend (
//   idFriend INTEGER constraint pk_friend primary key,
//   idUser INTEGER,
//   nameFriend TEXT,
//   CONSTRAINT fk_userFriend FOREIGN KEY (idUser) REFERENCES user(idUser)
// );
var db = require('../db');
exports.createFriend = function(req, res) {
  res.status(200);
  res.end();
};
exports.getFriend = function(req, res) {
  res.status(200);
  res.end();
};
