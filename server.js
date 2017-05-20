var db = require("./db");
var express = require("express");
var user = require("./routes/user");
var friend = require("./routes/friend");
var post = require("./routes/post");
var rest = express();

rest.post("/createUser", user.createUser);
rest.get("/getUser", user.getUser);

rest.post("/createFriend", friend.createFriend);
rest.get("/getFriend", friend.getFriend);

rest.post("/createPost", post.createPost);
rest.get("/getPost", post.getPost);

rest.listen(3000);
console.log("rodando em http://localhost:3000/");
