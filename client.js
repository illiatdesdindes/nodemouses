function ratelimit(fn, ms) {
  var last = (new Date()).getTime();
  return (function() {
    var now = (new Date()).getTime();
    if (now - last > ms) {
      last = now;
      fn.apply(null, arguments);
    }
  });
}

function removeMouse(id) {
  $('#'+id).remove();
}

function moveMouse(id, x, y) {
  if ( $('#'+id).size() == 0){
    $('body').append("<img id='"+id+"' class='mouse' src='http://ami71.no-ip.org/pointer.png' />");
  }
  $('#'+id).css({
    'left' : x + 'px',
    'top' : y + 'px'}
  );
}

function hub(msg){
  switch (msg[0]) {
    case 'coord': // "coord:id:x:y"
        moveMouse(msg[1], msg[2], msg[3])
      break;
      
    case 'disconnect': // "disconnect:id"
        removeMouse(msg[1])
      break;
  }
}

var socket = new io.Socket("ami71.no-ip.org",{port: 8080}); 
socket.connect();

socket.on('connect', function(){ 
  $('body').append('connected');
}); 

socket.on('message', function(d){
  console.log(d);
  var msg = d.split(':');
  hub(msg)
}); 

socket.on('disconnect', function(){}); 

$(document).mousemove( 
  ratelimit( function(e){
    socket.send(e.pageX +":"+e.pageY)
    }, 100)
);
