// Select DOM elements
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.getElementById('chat-messages');

// Function to send a new message
function sendMessage() {
  const message = messageInput.value;

  if (message.trim() !== '') {
    const newMessageElement = document.createElement('div');
    newMessageElement.classList.add('message');
    newMessageElement.textContent = message;
    chatMessages.appendChild(newMessageElement);
    messageInput.value = '';
  }
}

// Event listener for the send button
sendButton.addEventListener('click', sendMessage);

// Event listener for pressing Enter key in the input field
messageInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
});
