import express from 'express'
import http from 'http'
import { Server } from 'socket.io'

const app = express();
const server = http.createServer(app)
const io = new Server(server)

let usernameList = [];

app.get('/', (req, res) => {
  res.sendFile('C:/Users/a/Documents/MEGA/MEGAsync/code/using_files/socketio_test/login.html');
});

app.get('/chat', (req, res) => {
  res.sendFile('C:/Users/a/Documents/MEGA/MEGAsync/code/using_files/socketio_test/chat.html');
});

io.on('connection', (socket) => {
  socket.on('logged in', (__username) => {
    usernameList.push(__username);
  }) 
})

usernameList.forEach(username, () => {

})

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
    io.emit('chat message', `${username}: ${msg}`);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});

