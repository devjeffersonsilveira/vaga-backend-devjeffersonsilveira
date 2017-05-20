// CREATE TABLE IF NOT EXISTS user (
//   idUser INTEGER constraint pk_user primary key,
//   nameUser TEXT
// );

var db = require('../db');
exports.createUser = function(req, res) {
  res.status(200);
  res.end();
};
exports.getUser = function(req, res) {
  res.status(200);
  res.end();
};
