import Server from 'socket.io';

// create the Redux store
export default function startServer(store) {
  const io = new Server().attach(8090);

  // send the whole state tree to every connected person
  store.subscribe(
    () => io.emit('state', store.getState().toJS())
  );

  // get the current state on server connection
  io.on('connection', (socket) => {
    socket.emit('state', store.getState().toJS())
    socket.on('action', store.dispatch.bind(store))
  });
}
