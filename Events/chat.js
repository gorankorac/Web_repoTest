 var chatRoom = document.createElement('div');
 chatRoom.innerHTML = '<input type="text" id="input" placeholder="Enter message here..."><button id="send">Send</button><div id="messages"></div>';
 document.body.appendChild(chatRoom);
 /* Input field for writing message */
 var input = document.getElementById('input');
 /* Button for sending message */
 var sendButton = document.getElementById('send');
 /* Area for showing sent messages */
 var messages = document.getElementById('messages');
 /* After the Send button is clicked, the message from the input field is moved to the area with all other messages */
 var sendMessage = function() {
   var message = document.createElement('div');
   message.innerHTML = input.value;
   messages.appendChild(message);
   input.value = '';
 };
 sendButton.addEventListener('click', sendMessage);