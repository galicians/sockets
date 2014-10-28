var express = require('express')
var host = "127.0.0.1"
var port = 1337


var app = express.createServer()
app.get("/", function(request, response) {
	response.setHeader("Content-Type", "text/html")
	response.send("Hello")
})

app.listen(port, host)