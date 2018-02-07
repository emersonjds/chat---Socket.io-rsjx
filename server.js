let app = require('express')();
let htpp = require('http').Server(app);
let io = require('socket.io')(http);

io.on('connect', (socket) => {
    console.log('user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('on-message', (message) => {
        io.emit('message', {type: 'new-message', text: 'message'})
    });
});

http.listen(5000, () => {
    console.log('start server on port 5000');
});
