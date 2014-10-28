
var socket = new WebSocket('ws://localhost:5000') // URL to the address listening for socket connections

//onopen, onclose, and onmessage methods connect you to events on the socket instance.

socket.onopen = function(event) {
	
	socket.send('I am the client and Im listening!')

	socket.onmessage = function(event) { console.log('Client received a message',event) }

	socket.onclose = function(event){ console.log('Client should know socket has been closed'),event}

}

// To close the socket...
// socket.close()