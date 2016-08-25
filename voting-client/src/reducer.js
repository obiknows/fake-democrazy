import {Map} from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

export default function (state = Map(), action) {

  // handle SET_STATE
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state)
  }
  return state;
}
