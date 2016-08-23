import makeStore from './src/store';
import {startServer} from './src/server';

export const store = makeStore();
startServer(store);

// setup the app and get it poppin
store.dispatch({
  type: 'SET_ENTRIES',
  entries: require('./entries.json')
});
store.dispatch({type: 'NEXT'});
