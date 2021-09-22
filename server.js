var express = require("express");
var socket = require("socket.io");

// const myPort = 3000;
const myPort = process.env.PORT || 3000;

//run the server
var app = express();
app.use(express.static("public"));
var server = app.listen(myPort, listen);

function listen() {
  //   var host = server.address().address;
  //   var port = server.address().port;
  //   var host = "localhost";
  //   var port = 3000;
  if (server) console.log("Server is listening on " + myPort);
}

app.use(express.static("public"));

//socket  setup
var io = socket(server);

//when a new connection is made
io.sockets.on("connection", (socket) => {
  console.log("new connection\nsocket id:" + socket.id + "\n");
  socket.on("mouse", (data) => {
    console.log(data);
    socket.broadcast.emit("mouseReply", data);
  });
  socket.on("disconnect", () => {
    console.log("Cient has disconnected");
  });
});
