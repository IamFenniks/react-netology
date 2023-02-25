import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { chatReduser } from "../../../redusers/chatReduser";
import ChatForm from "./chat-inner/ChatForm";
import MessageHistory from "./chat-inner/MessageHistory";

const messages = [
  {
      "id": 1,
      "userId": "5f2d9da0-f624-4309-a598-8ba35d6c4bb6",
      "content": "Какая сейчас погода за окном?"
  },
  {
      "id": 2,
      "userId": "5f2d9da0-f624-4309-a598-8ba35d6c4bb6",
      "content": "К сожалению, я не знаю ответа на этот вопрос"
  },
];

const ChatTwo = () => {
  const [state, setState] = useState([]);
  const [cache, setCache] = useState('');

  const win = window.localStorage;

  useEffect(() => {
    !win.getItem('userId') && win.setItem('userId', nanoid());
    setCache(win.getItem('userId'));
  }, []);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setTimeout(() => {
      const result = chatReduser({method: 'get'});
      setState([...result]);  
    }, 2000);
    
  }

  
  const handleAddText =  async (messData) => {
    await chatReduser({ method: 'post', messData });

    const result = await chatReduser({method: 'get'});
    setState([...result]);
    // debugger
  }

  return (
    <div className="clearfix chat-container m-content">
      <div className="chat">
        <div className="chat-history">
          <MessageHistory list={state} />
        </div>  

        <ChatForm className="new-message" addData={handleAddText} />
      </div>
    </div>
  );
}

export default ChatTwo;
