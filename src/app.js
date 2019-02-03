class Msg {
  constructor(messageInput, messageList, submitButton) {
    this.messageInput = messageInput;
    this.messageList = messageList;
    this.submitButton = submitButton;
  }

  getMsg() {
    this.messageInput = messageInput.value;
    let messageText = document.createTextNode(this.messageInput);
    let messageItem = document.createElement('li');
    messageItem.appendChild(messageText);
    messageList.appendChild(messageItem);

    return this;
  }
  
  submitMsg() {
    this.submitButton.addEventListener('click', this.getMsg);
    this.messageInput.addEventListener('keypress', (e) => {
      let key = e.keyCode || e.which;
      if (key === 13) {
        return this.getMsg.apply(this);
      }
    })

    return this;
  }
}

let messageInput = document.getElementById('message-input');
let messageList = document.getElementById('message-list');
let submitButton = document.getElementById('submit-button');
let message = new Msg(messageInput, messageList, submitButton);
message.submitMsg();