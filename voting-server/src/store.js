import {createStore} from 'redux';
import reducer from './reducer';

// create the Redux store
export default function makeStore() {
  return createStore(reducer);
}
