import SocketIOClient from 'socket.io-client'
const url = "https://seyupo-api.openode.io/";
export const socket = () => {
    var io = SocketIOClient(url, { transports: ['websocket'] });
    return io;
}