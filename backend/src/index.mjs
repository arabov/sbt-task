import http from 'http';
import socketio from 'socket.io';
import app from './app';
import socket_handler from './socket_handler';

const env = process.env.NODE_ENV || 'development'
    , port = process.env.PORT || 80
;

export let server = http.createServer(app)
    , socket = socketio(server)
;

server.listen(port, () => {
    console.log('Listening on ' + port);
});

socket.on('connection', socket_handler);
