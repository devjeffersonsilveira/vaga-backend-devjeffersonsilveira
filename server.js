var db = require("./db");
var express = require("express");
var bodyParser = require('body-parser');
var user = require("./routes/user");
var friend = require("./routes/friend");
var post = require("./routes/post");

var rest = express();

rest.use(bodyParser.json());
rest.use(bodyParser.urlencoded({
  extended: true
}));
rest.use(bodyParser.text());
rest.use(bodyParser.json({
  type: 'application/json'
}));


rest.route("/user")
  .get(user.getUsers)
  .post(user.createUser);
rest.route("/user/:id")
  .get(user.getUser);
// .delete(user.deleteUser)
// .put(user.updateUser);


rest.route("/friend")
  .get(friend.getFriends)
  .post(friend.createFriend);
// rest.route("/friend/:id")
// .delete(friend.deleteUser)
// .put(friend.updateUser);

rest.route("/post")
  .get(post.getPosts)
  .post(post.createPost);
rest.route("/post/:id")
  .get(post.getPost);
// .delete(user.deleteUser)
// .put(user.updateUser);


rest.listen(3000);
console.log("rodando em http://localhost:3000/");
