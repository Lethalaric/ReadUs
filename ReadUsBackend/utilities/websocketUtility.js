var WebSocket = require('ws');

var wss;
var clients = {};
var counter = 1;

exports.openConnection = (server) => {
    wss = new WebSocket.Server({ server, path: "/websocket" });
    console.log('connection is up : ', wss);
    wss.on('connection', (ws) => {
        clients[counter++] = ws;
        console.log('connection is up');
        ws.send('you are connected');
    });
}

exports.sendMessage = (id, message) => {
    console.log('wss status : ', wss);
    console.log('client : ', clients);
    if (clients[id] != null) {
        clients[id].send('hello, here is message from server : ' + message);
    }
}