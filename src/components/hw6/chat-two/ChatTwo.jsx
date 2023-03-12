import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { chatReduser } from "../../../redusers/chatReduser";
import ChatForm from "./chat-inner/ChatForm";
import MessageHistory from "./chat-inner/MessageHistory";

const ChatTwo = () => {
  // (I) Создаём три сосояния: 
  // 1. Полученные сообщения, 2. ID последнего сообщения, 3. ID пользователя
  const [messages, setMessages] = useState([]);
  const [lastMessID, setLastMessID] = useState(0);
  const [userID, setUserID] = useState(nanoid());

  // (II) После отрисовки компонента:
  useEffect(() => {
    const timer = setInterval(async () => {
      debugger
      sessionStorage.length === 0 && sessionStorage.setItem('userId', userID);
      setUserID(sessionStorage.getItem('userId'));

      const response = await chatReduser({ method: "get", id: lastMessID }); // отправляем ID "0"
      if (response.length !== 0) {
        const lastResID = response[response.length - 1].id;
        if (lastResID !== lastMessID) {
          setMessages((prevMessages) => [...prevMessages, ...response]);
          setLastMessID(lastResID);
        }
      }
    }, 5000);
    
    return () => {
      clearTimeout(timer)
    };
  }); 

  // Объявляем стрел. функцию, которая будет асинхр. в парам. получаем от события тело сообщения
  const handleAddMessage = async (messText) => {
    // Используем tru catch
    try {
      // в случае успеха объявляем переменную объекта, который комплектуем из...
      const payload = {
        id: lastMessID + 1, // 1. ID последнего сообщения + 1
        userId: userID,     // 2. ID пользователя (он же кэш)
        content: messText   // 3. и само сообщение
      }
      // отправляем на сервер этот объкет и метод post
      await chatReduser({ payload, method: 'post' });
      // subscribe();
      // иначе перехватываем ошибку
    } catch (error) {
      return <p>Ошибка: {error}</p>
    }
  }
  debugger
  return (
    <div className="clearfix chat-container m-content">
      <div className="chat">
        <div className="chat-history">
          <MessageHistory list={messages} />
        </div>

        <ChatForm className="new-message" addData={handleAddMessage} />
      </div>
    </div>
  );
}

export default ChatTwo;
