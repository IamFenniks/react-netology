import React from "react";
// import MessageHistory from "./MessageHistory";

const messages = [
  {
    id: 'chat-5-1090',
    from: { name: 'Ольга' },
    type: 'response',
    time: '10:10',
    text: 'Привет, Виктор. Как дела? Как идёт работа над проектом?'
  }, {
    id: 'chat-5-1091',
    from: { name: 'Виктор' },
    type: 'message',
    time: '10:12',
    text: 'Привет. Давай сегодня созвонимся. Проект практически готов, и у меня есть что показать.'
  }];

const ChatTwo = () => {
  return (
    <div className="clearfix chat-container m-content">
      <div className="chat">
        <div className="chat-history">
          {/* <MessageHistory list={messages} /> */}
        </div>
      </div>  
    </div>
  );
}

export default ChatTwo;
