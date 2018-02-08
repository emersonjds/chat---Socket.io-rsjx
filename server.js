let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

let port = Number(process.env.PORT || 3000);

app.get('/message', (req, res) => {
    res.send(`<h1> API NO AR </h1>`);
});

io.on('connect', (socket) => {
    console.log('user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('on-message', (message) => {
        io.emit('message', { type: 'new-message', text: 'message' })
    });
});

http.listen(port, () => {
    console.log('start server on port 3000');
});
