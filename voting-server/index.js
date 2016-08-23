import makeStore from './src/store';
import startServer from './src/server';

export const store = makeStore();
startServer();
console.log('started the server');
