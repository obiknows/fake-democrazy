/* reducer.js */
import {setEntries, next, vote, INITIAL_STATE} from './core';

// reducer function to apply an action to the state tree
export default function reducer(state = INITIAL_STATE, action){
  switch (action.type) {
    case 'SET_ENTRIES':
      return setEntries(state, action.entries);
    case 'NEXT':
      return next(state);
    case 'VOTE':
      return state.update('vote',
        voteState => vote(voteState, action.entry));
  }
  return state; // if no action fits, (do nothing)
}
