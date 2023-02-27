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
    // 1. Объявляем асинхронную функцию инервала: 
    const timer = setTimeout(async() => {
      // a) cохраняем ID поль-ля в localStorage
      window.localStorage.setItem('userId', userID);
      // b) получаем ответ(промис) от сервера, передав ему ID последнего сообщения и метод GET
      const response = await chatReduser({method: 'get', id: lastMessID});
      // c) если сообщений больше одного,
      if(response.length !== 0) {
        // то получаем(объявбяем ID) последнего, уменьшив индекс на ОДИН
        const lastResID = response[response.length - 1].id;
        // и, если ID последнего и отправленного не сервер не совпадают, 
        if(lastResID !== lastMessID) {
          // то добавляем в стейт сообщение
          setMessages(prevMessages => [...prevMessages, ...response]);
          // и ID последнего сообщения
          setLastMessID(lastResID);
        }
      }
    // d) указываем интервал обновления
    }, 3000)
    // 2. Сбрасываем тайминг, если пользователь ушёл со страницы(стоп рендеринг)
    return () => {
      clearTimeout(timer);
    }
  }, []); // - componentDidMount()



  // (III) Добавление нового сообщения
  // Объявляем стрел. функцию, которая будет асинхр. в парам. получаем от события тело сообщения
  const handleAddMessage =  async (messText) => {
    debugger;
    // Используем tru catch
    try {
      // в случае успеха объявляем переменную объекта, который комплектуем из...
      const payload = {
        id: lastMessID + 1, // 1. ID последнего сообщения + 1
        userId: userID,     // 2. ID пользователя (он же кэш)
        content: messText   // 3. и само сообщение
      }
      // отправляем на сервер этот объкет и метод post
      await chatReduser({payload, method: 'post'});
    // иначе перехватываем ошибку
    } catch (error) {
      return <p>Ошибка: {error}</p>
    }
  }

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
