const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.get('/', function(req, res, next) {
	res.sendFile(__dirname + '/index.html');
});

server.listen(8080, function() {
	console.log('--- STANDING BY ---');
}
