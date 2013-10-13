var socket = new WebSocket("ws://echo.websocket.org/");

socket.onopen = function(data){
$("#status").append("<h1>Connection established</h1>"+"<p>"+JSON.stringify(data)+"</p>");
sendMessage(socket);
}

socket.onmessage = function(event){
$("#status").append("<h1>"+event.data+"</h1>");
}


function sendMessage(socket){
socket.send("Yeah");
$("#status").append("<h1>Message sent</h1>");

}