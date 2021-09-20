// module.exports.portNum = process.env.PORT;

var express = require("express");
var socket = require("socket.io");

// const myPort = 80;
const myPort = process.env.PORT || 5000;

//run the server
var app = express();
app.use(express.static("public"));
var server = app.listen(myPort);
if (server) console.log("Server is running on port" + process.env.PORT);

//socket  setup
var io = socket(server);
//when a new connection is made
io.sockets.on("connection", newConnection);
function newConnection(socket) {
  console.log("new connection\nsocket id:" + socket.id + "\n");

  socket.on("mouse", mouseMessage);

  function mouseMessage(data) {
    console.log(data);
    socket.broadcast.emit("mouseReply", data);
  }
}
