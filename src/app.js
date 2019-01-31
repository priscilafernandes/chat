class Msg {
  constructor(messageInput, messageList, submitButton) {
    this.id = Math.random(); // ou this.id++
    this.messageInput = messageInput;
    this.messageList = messageList;
    this.submitButton = submitButton;
  }

  getMsg(){    
    this.messageInput = messageInput.value;
    const messageText = document.createTextNode(this.messageInput);
    const messageItem = document.createElement('li');

    messageItem.appendChild(messageText);
    messageList.appendChild(messageItem);

    return this;    
  }

  keypress(e){
    const key = e.which || e.keyCode;

    // const getMsgFunction = this.getMsg;

    console.log('this.getMsg retorna isso: ' + this.getMsg)

    if (key === 13) {
      this.getMsg;
      // return getMsgFunction;
      // console.log(this.getMsg)
    }

    return this;
  }

  submitMsg(){    
    submitButton.addEventListener('click', this.getMsg);
    messageInput.addEventListener('keypress', this.keypress);
    return this;
  }
}

const messageInput = document.getElementById('message-input');
const messageList = document.getElementById('message-list');
const submitButton = document.getElementById('submit-button');

const message = new Msg(messageInput, messageList, submitButton);
message.submitMsg();

// console.log('message.submitMsg() retorna isso: ' + message.submitMsg())
// console.log('message retorna isso: ' + message)

// class Methods extends Msg {
//   // function() {
//   //   return this;
//   // }  
// }

// const allMsg = [];