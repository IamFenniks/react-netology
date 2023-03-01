const express = require('express');
const cors = require('cors');
const events = require('events'); // Спасоб по событиями от Node.js возвращать ответ на клиент 
const PORT = 7777;

const emitter = new events.EventEmitter(); // Регистрация, подписываться и вызывать события

const app = express(); // Экземряр приложения из экспресса

app.use(cors()); // Добавляем corsMiddleware
app.use(express.json());




// Endpoint GET
app.get('/messages', (req, res) => {
    emitter.once('newMessage', (message) => { // emitter.once() отработывает единажды
        res.json(message) // и внутри колбека этого события возвращаем всем польз-м, у котрых
    });                   // сейчас висит подключение возвращаем это сообщение
});

// Endpoint POST
app.post('/messages', (req, res) => { // ('Маршрут', ()={} - колбэкк, кот. будет отраб. по этому маршруту)
    const message = req.body;         // Достаём сообщение из тела запроса
    emitter.emit('newMessage', message);
    res.status(200);                  // Если отправка успешно то отправляем всем клиентам сообщени о событии
});                                   // в get emitter.once с помощью emitter.emit('newMessage', message)




// Приложение, прослушивай порт, если прилож. запустилось успешно, то выведи в консоль
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))