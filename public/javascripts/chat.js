let socket = io()

let message = document.getElementById("message");
let username = document.getElementById("username");
let send_message = document.getElementById("send_message");
let chatroom = document.getElementById("chatroom");
let avatar = document.getElementById("avatar");
let isTyping = document.getElementById("isTyping");
let chatters = document.getElementById("chatters");


send_message.addEventListener("click", () => {
  socket.emit("new_message", {
    username: username.value,
    message: message.value,
    avatar: avatar.value,
  });
  message.value = "";
});
  

message.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    socket.emit("new_message", {
      username: username.value,
      message: message.value,
      avatar: avatar.value,
    });
    message.value = "";
  }
});

  message.addEventListener('keypress', () => {
    socket.emit('typing', {username: username.value})
  })

  function getUserName() {
    fetch('/users/getName')
    .then((response) => {
      return response.json()
      .then((data) => {
        socket.emit('register-user', data)
      })
    })
  }

  getUserName()

  socket.on('update-chatter-list', (data) => {
    let chatterList = "<li>" + data.join("</li><li>") + "</li>";
    chatters.innerHTML = chatterList
  })

  socket.on('user-enter', ()=> {
    enterAudio.play()
  })

  socket.on('user-exit', ()=> {
    exitAudio.play()
  })

  socket.on('typing', (data) => {
    isTyping.innerText = `${data.username} is typing...`
  })
 
  socket.on("new_message", (data) => {
    isTyping.innerText = "";
    messageAudio.play();
    let newMessage = document.createElement("p");
    newMessage.innerHTML = `<p><img id="avatarPhoto" height="30" src="${data.avatar}" alt=""> ${data.username.split(' ')[0].toString()}: ${data.message}</p>`;
    chatroom.prepend(newMessage);
    fetch("/chatroom", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        avatar: data.avatar,
        username: data.username,
        message: data.message,
      }),
    });
  });