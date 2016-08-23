import {Server} from 'socket.io';

// create the Redux store
export default function startServer() {
  const io = new Server().attach(8090);
}
