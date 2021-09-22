var express = require("express");
var socket = require("socket.io");

// const myPort = 1234;

//run the server
var app = express();
app.use(express.static("public"));
var server = app.listen(3000, listen);

function listen() {
  //   var host = server.address().address;
  //   var port = server.address().port;
  var host = "localhost";
  var port = 3000;
  console.log("Server is listening on http//" + host + ":" + port);
}

app.use(express.static("public"));

//socket  setup
var io = socket(server);

//when a new connection is made
io.sockets.on("connection", newConnection);
function newConnection(socket) {
  console.log("new connection\nsocket id:" + socket.id + "\n");

  socket.on("mouse", function (data) {
    console.log(data);
    socket.broadcast.emit("mouseReply", data);
  });
  socket.on("disconnect", function () {
    console.log("Cient has disconnected");
  });
}
