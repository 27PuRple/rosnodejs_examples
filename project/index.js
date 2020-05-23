const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const rosnodejs = require('rosnodejs');
const std_msgs = rosnodejs.require('std_msgs').msg;

let count = 0;

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/publish.html');
});

function talker() {
	rosnodejs.initNode('/talker_node').then((rosNode) => {
		let pub = rosNode.advertise('/chatter', std_msgs.String);
		const msg = new std_msgs.String();
		msg.data = 'Hello '+count;
		pub.publish(msg);
		rosnodejs.log.info(msg.data);
		++count;
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
