const express = require('express');
const app = express();
const server = require('http').createServer(app);

server.listen(8080, function() {
	console.log('--- STANDING BY ---');
}
