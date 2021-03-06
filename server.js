import express from 'express';
import http from 'http';
import socketio from 'socket.io';

const app = express();
const server = http.createServer(app);
const sockets = socketio(server);

app.use(express.static('public'));

sockets.on('connection', socket => {
  const player = {
    id: socket.id
  };

  console.log(`> Player connected: `, player);

  socket.on('disconnect', () => {
    console.log(`> Player disconnected: `, player);
  })
});

server.listen(3000, () => {
  console.log(`> Server listening on port: 3000`)
});
