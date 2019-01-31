class Msg {
  constructor(messageInput, messageList, submitButton) {
    this.id = Math.random(); // ou this.id++
    this.messageInput = messageInput;
    this.messageList = messageList;
    this.submitButton = submitButton;
  }

  getMsg(){
    this.messageInput = messageInput.value;    
    const messageText = document.createTextNode(messageInput);
    const messageItem = document.createElement('li');
    messageItem.appendChild(messageText);
    messageList.appendChild(messageItem);

    // console.log(messageInput)
    // console.log(messageText)
    return this;
  }

  submitMsg(){
    submitButton.addEventListener('click', this.getMsg);
    return this;
  }
}

const messageInput = document.getElementById('message-input');
const messageList = document.getElementById('message-list');
const submitButton = document.getElementById('submit-button');

const message = new Msg(messageInput, messageList, submitButton);
message.getMsg().submitMsg();

console.log('Mensagem 1: ' + message)



// class Methods extends Msg {
//   // function() {
//   //   return this;
//   // }  
// }

// const allMsg = [];