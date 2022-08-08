const chatForm = document.getElementById('chat-form')
const chatMessages = document.querySelector('.chat-messages');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');
const usernametag = document.getElementById('username');
const usernameSettings = document.querySelector('.current-username');
const UsernameChangeDashboard = document.getElementById('name-change')
const TagChangeDashboard = document.getElementById('tag-change')


// Get username and room from URL
const { username, room } = Qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
const socket = io();

//join chat room
socket.emit('joinRoom',{username,room});


//get room and users
socket.on('roomUsers', ({ room, users,tag}) =>{
  outputRoomName(room);
  outputUsers(users)
  userTag(tag,users)
});




//msg form server
socket.on('message', message => {
    console.log(message)
    outputMeesage(message)

    //scroll down
      chatMessages.scrollTop = chatMessages.scrollHeight;
});

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //gettings the msg value
    const msg = e.target.elements.msg.value;

    //sending the msg to user
    socket.emit('chatMessage', msg);

    //clear input
    e.target.elements.msg.value = '';
    e.target.elements.msg.focus();
});


//output msg to DOM
function outputMeesage(message) {
    const div = document.createElement('div')
    div.classList.add('message');
    div.innerHTML = `<div class="message">
    <p class="meta">${message.username}<span>${message.time}</span></p>
    <p class="text">
        ${message.text}
    </p>
</div>`;
  document.querySelector('.chat-messages').appendChild(div);
}

//add room name to DOM
function outputRoomName(room){
  roomName.innerText = room;
}

//add user to DOm
function outputUsers(users){
    userList.innerHTML = `
    ${users.map(user => `<li>${user.username}</li>`).join('')}
    `
}

//add user+tag to DOM
function userTag(tag,users){
    tag = Math.floor(1000 + Math.random() * 9000);
    usernametag.innerHTML = `
    ${users.map(user => `<li>${user.username} ${'#'+tag}</li>`).join('')}
    `
    usernameSettings.innerHTML = `
    ${users.map(user => `<li>${user.username} ${'#'+tag}</li>`).join('')}
    `
    UsernameChangeDashboard.innerHTML = `
    ${users.map(user => `<li>${user.username}</li>`).join('')}
    `
    TagChangeDashboard.innerHTML = `
    ${users.map(user => `<li>${'#'+tag}</li>`).join('')}
    `
}
//adding user to user dashboard