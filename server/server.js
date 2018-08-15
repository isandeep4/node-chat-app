const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection' , (socket)=> {
  console.log('new connection is connected');
  socket.emit('newMessage',{
    from:'server',
    text:'Hey man what are you upto',
    createdAt:12500

  });
  socket.on('createMessage', (message) => {
    console.log('createMessage',message);
  });
  socket.on('disconnect' , () => {
    console.log('user was disconnected');
  })
});


app.use(express.static(publicPath));

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
