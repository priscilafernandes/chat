class Msg {
  constructor(messageInput, messageList, submitButton) {
    this.messageInput = messageInput;
    this.messageList = messageList;
    this.submitButton = submitButton;
  }

  getMsg() {
    this.messageInput = messageInput.value;
    const messageText = document.createTextNode(this.messageInput);
    const messageItem = document.createElement('li');

    messageItem.appendChild(messageText);
    messageList.appendChild(messageItem);

    return this;
  }

  submitKey(event) {
    const key = event.keyCode || event.which;
    const getMsgMethod = this.getMsg;

    if (key === 13) {
      console.log(getMsgMethod);
      return getMsgMethod;
    }
    
    return this;
  }
  
  submitMsg() {    
    this.submitButton.addEventListener('click', this.getMsg);
    this.messageInput.addEventListener('keypress', this.submitKey);

    return this;
  }
}

const messageInput = document.getElementById('message-input');
const messageList = document.getElementById('message-list');
const submitButton = document.getElementById('submit-button');

const message = new Msg(messageInput, messageList, submitButton);
message.submitMsg();