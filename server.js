var express = require('express');
var socket = require('socket.io');

const myPort = 1234;

//run the server
var app = express();
app.use(express.static('public'));
var server = app.listen(myPort);
if(server)
	console.log("Server is running on port"+myPort);

//socket 
var io = socket(server);
//when a new connection is made
io.sockets.on('connection',newConnection);
function newConnection(socket){
		console.log("new connection\nsocket id:"+socket.id+"\n");

		socket.on('mouse', mouseMessage);

		function mouseMessage(data){
			console.log(data);
			socket.broadcast.emit('mouseReply',data);
		}
}