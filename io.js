const io = require('socket.io')()

let chatters = {}

io.on('connection', (socket) => {
  // This is where all of our server-side socket.io functionality will exist.  

    // When anyone 'enters the room (loads the page)', add them to the list and play a sound
  socket.on('register-user', (username)=> {
    chatters[socket.id] = username
    io.emit('update-chatter-list', Object.keys(chatters).map(id => chatters[id]))
    io.emit('user-enter')
  })

  socket.on('disconnect', ()=> {
    delete chatters[socket.id]
    io.emit('update-chatter-list', Object.keys(chatters).map(id => chatters[id]))
    io.emit('user-exit')
  })

    // When anyone 'leaves the room (navigates away from the page)', remove them from the list and play a sound

    // When anyone sends a message, send the message to all of the connected clients 
    socket.on('new_message', (data) => {
      io.sockets.emit('new_message', {message: data.message, username: data.username, avatar: data.avatar})
    })
    // When anyone presses a key while typing a message, display a '(user) is typing...' message to all clients
    socket.on('typing', (data) => {
      socket.broadcast.emit('typing', {username: data.username})
    })
  
})

module.exports = io

