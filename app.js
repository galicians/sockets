var fs = require('fs')
var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)
var host = "127.0.0.1"
var port = 5000



// io.on('direction', function(data) {
// 	console.log("the direction the player choose is:", data)
// })
// socket.emit('points', {player: 'points'})
// io.sockets.emit("the game is starting in")

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('keydown', function(key) {console.log(key)})
});


app.get('/', function(request, response) {
	var content = fs.readFileSync("template.html")
	response.setHeader("Content-Type", "text/html")
	response.send(content)
})

http.listen(port, host, function() {

})
