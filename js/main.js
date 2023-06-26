import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import { username } from './login.js'

const app = express();
const server = http.createServer(app)
const io = new Server(server)

app.get('/', (req, res) => {
  res.sendFile('C:/Users/a/Documents/MEGA/MEGAsync/code/using_files/socketio_test/login.html');
});
  
io.on('connection', (socket) => {
  console.log(`${username} connected`);
  io.emit('system message', `${username} connected.`)
  socket.on('disconnect', () => {
    console.log(`${username} disconnected`);
    io.emit('system message', `${username} disconnected.`)
  });
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});