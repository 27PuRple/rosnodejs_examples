const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const rosnodejs = require('rosnodejs');
const std_msgs = rosnodejs.require('std_msgs').msg;

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

function talker() {
	rosnodejs.initNode('/talker_node').then((rosNode) => {
		let pub = rosNode.advertise('/chatter', std_msgs.String);
		const msg = new std_msgs.String();
		msg.data = 'hello';
		pub.publish(msg);
		rosnodejs.log.info(msg.data);
	});
}

io.on('connection', function(client) {
	console.log('COMPLETE');

	client.on('DataChange', function(data) {
		talker();
	});
});

server.listen(8080, function() {
	console.log('--- STANDING BY ---');
});
