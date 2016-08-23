/* reducer.js */
import {setEntries, next, vote}

// reducer function to apply an action to the state tree
export default function reducer(state, action){
  switch (action.type) {
    case 'SET_ENTRIES':
      return setEntries(state, action.entries);
    case 'NEXT':
      return next(state);
    case 'VOTE':
      return vote(state, action.entry)
  }
  return state; // if no action fits, (do nothing)
}
