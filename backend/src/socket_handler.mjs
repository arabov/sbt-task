import { socket as sockets } from './index';
import db from './db';

export default (socket) => {
    console.log('Socket client connected ' + socket.id);
    //console.log(socket);

    socket.on('login', async (object) => {

        //ищем пользователя в бд
        let user = db.users.find((user) => user.login === object.login);

        if (!user) {
            return socket.emit('error_message', 'Error');
        }

        //если оператор то добавляем список "простых" пользователей
        if (user.role === 'operator') {
            user.users = db.users.filter((user) => user.role === 'user');
        }

        socket.emit('loggedin', user);

    });

    socket.on('get_history', async (object) => {
        console.log('get_history', object);
        socket.emit('history', db.history.find((h) => object.history_id === h.history_id) || { history_id: object.history_id, messages: [] });
    });

    socket.on('new_message', async (object) => {
        console.log('new_message', object);

        let history = db.history.find((h) => object.history_id === h.history_id);

        //если нет истории то создаем ее в бд
        if (!history) {
            db.history.push({ history_id: object.history_id, messages: [] });
            history = db.history.find((h) => object.history_id === h.history_id);
        }

        //добавляем сообщение в массив истории
        history.messages.push(object.message);

        sockets.emit('update_history', object);
    });



};

