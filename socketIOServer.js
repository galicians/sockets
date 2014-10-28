
var http = require('http'), io = require('socket.io');

var server = http.createServer(function(req, res){ 

	// Send HTML headers and message
	res.writeHead(200,{ 'Content-Type': 'text/html' }); 
	res.sendFile('clientWebSocket');
});
server.listen(5000);

var socket = io.listen(server);

socket.on('connection', function(client){ 

	client.on('message',function(event){ 
		console.log('Received message from client!',event);
	});

	client.on('disconnect',function(){
		clearInterval(interval);
		console.log('Server has disconnected');
	});

});

var interval = setInterval(function() {
	client.send('This is a message from the server!  ' + new Date().getTime());
},5000);