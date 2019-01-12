import SocketIOClient from 'socket.io-client'
const url = "https://nameless-tor-98135.herokuapp.com";
export const socket = () => {
    var io = SocketIOClient("http://localhost:4001");
    return io;
}