let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.get('/teste', (req, res) => {
    res.send(console.log('api esta no ar'));
});

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
