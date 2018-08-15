var socket = io() ;
socket.on('connect', ()=>{
  console.log('connected to server');
  socket.emit('createMessage',{
    To:'sandy',
    Text:'I m good ',
    createdAt:125400
  })
});
socket.on('disconnect',() => {
  console.log('disconnected from server');
});
socket.on('newMessage',(message) => {
  console.log('new message' , message );
})
