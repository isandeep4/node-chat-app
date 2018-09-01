var socket = io() ;
socket.on('connect', ()=>{
  console.log('connected to server');
});
socket.on('disconnect',() => {
  console.log('disconnected from server');
});
socket.on('newMessage',(message) => {
  var timestamp = moment(message.createdAt).format('h:mm a');
  var template = jQuery('#message-template').html();
  var html = Mustache.render(template,{
    text:message.text,
    from:message.from,
    createdAt:timestamp
  });
  jQuery('#messages').append(html);
  // var li = jQuery('<li></li>');
  // li.text(`${message.from} ${timestamp}: ${message.text}`);
  // jQuery('#messages').append(li)

});
socket.on('newLocationMessage',(message) => {
  var timestamp = moment(message.createdAt).format('h:mm a');
  var template = jQuery('#location-message-template').html();
  var html = Mustache.render(template,{
    url:message.url,
    from:message.from,
    createdAt:timestamp
  });
  jQuery('#messages').append(html);

  // var li =jQuery('<li></li>');
  // var a = jQuery('<a target="_blank">My current Location</a>');
  // li.text(`${message.from} ${timestamp}: `);
  // a.attr('href',message.url);
  // li.append(a);
  // jQuery('#messages').append(li);
})
// socket.emit('createMessage',{
//   from:'hank',
//   text:"Hi"
// },(data)=>{
//   console.log('Got it' , data)
// })
jQuery('#message-form').on('submit',function(e){
  e.preventDefault();
  socket.emit('createMessage',{
    from:'user',
    text: jQuery('[name=message]').val()
  },function(){

  });

});
var locationButton = jQuery('#send-location');
locationButton.on('click' , () => {
  if(!navigator.geolocation) {
    return alert('geolocation not supported by your browser')
  }
  navigator.geolocation.getCurrentPosition(function(position){
    socket.emit('createLocationMessage' ,{
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    })
  },function(){
    alert('unable to fetch the position')
  })
})
