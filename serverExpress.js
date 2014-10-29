var express = require('express')
var host = "127.0.0.1"
var port = 5000


var app = express()

app.use(express.static(__dirname + "/public"))

app.get("/", function(request, response) {
	response.send("Hello")
})

app.get("/hello/:text", function(request, response) {
	response.send("Hello " + request.params.text)
	console.log(request.params)
})

app.get("/user/:id", function(request, response) {
	var user = users[request.params.id]
	if (user) {
		response.send('user found')
	} else {
		response.send("Sorry we haven't found that user")
	}
})

app.listen(port, host)