let app = require('express')();
let htpp = require('http').Server(app);
let io = require('socket.io')(http);

io.on('connect', (socket) => {
    console.log('user connected');
})
