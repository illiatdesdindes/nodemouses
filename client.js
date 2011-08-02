


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

function moveMouse(id, x, y, nom) {
  if ( $('#'+id).size() == 0){
    $('body').append("<div id='"+id+"' class='mouse'><img src='/nodemouses/pointer.png' />"+nom+"</div>");
  }
  $('#'+id).css({
    'left' : x + 'px',
    'top' : y + 'px'}
  );
}

function hub(msg){
  switch (msg[0]) {
    case 'coord': // "coord:id:x:y"
        moveMouse(msg[1], msg[2], msg[3], msg[4])
      break;
      
    case 'disconnect': // "disconnect:id"
        removeMouse(msg[1])
      break;
  }
}

var nom = prompt("Votre nom svp:");

var socket = new io.Socket(location.hostname,{port: 8080}); 
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
    socket.send(e.pageX +":"+e.pageY+":"+nom)
    }, 100)
);


