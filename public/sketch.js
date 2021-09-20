var socket;

function setup() {
  createCanvas(windowWidth - 50, windowHeight - 50);
  background(255);
  socket = io.connect("https://myshareboard.herokuapp.com:" + process.env.PORT);
  socket.on("mouseReply", newDraw);
}

function newDraw(data) {
  noStroke();
  fill(0, 0, 255);
  ellipse(data.x, data.y, 20, 20);
}

function mouseDragged() {
  // console.log(mouseX,mouseY);
  noStroke();
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, 20, 20);

  var data = {
    x: mouseX,
    y: mouseY,
  };
  // console.log("sending mouse data");
  socket.emit("mouse", data);
}

function draw() {}
