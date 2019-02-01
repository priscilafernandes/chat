class Msg {
  constructor(messageInput, messageList, submitButton) {
    this.messageInput = messageInput;
    this.messageList = messageList;
    this.submitButton = submitButton;

    this.getMsg = this.getMsg.bind(this);
    this.submitKey = this.submitKey.bind(this);
  }

  getMsg(){
    this.messageInput = messageInput.value;
    const messageText = document.createTextNode(this.messageInput);
    const messageItem = document.createElement('li');

    messageItem.appendChild(messageText);
    messageList.appendChild(messageItem);

    return this;
  }

  // bind(scope, fn) {
  //   return () => {
  //     return fn.apply(scope, []);
  //   }
  // }

  submitKey(e){
    const key = e.keyCode || e.which;
    const getMsgMethod = this.getMsg;

    if (key === 13) {

      console.log('RETORNA: ' + getMsgMethod)

      alert('valeu, valeu!')
      
      return getMsgMethod;
    }
    
    return this;
  }

  submitMsg(){    
    this.submitButton.addEventListener('click', this.getMsg);
    this.messageInput.addEventListener('keypress', this.submitKey.bind(this));
    // this.messageInput.addEventListener('keypress', this.submitKey.bind(this.getMsg));    
    // this.messageInput.addEventListener('keypress', this.bind(this.submitKey, this.getMsg));
    
    return this;
  }
}

const messageInput = document.getElementById('message-input');
const messageList = document.getElementById('message-list');
const submitButton = document.getElementById('submit-button');

const message = new Msg(messageInput, messageList, submitButton);
message.submitMsg();