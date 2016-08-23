import {List, Map} from 'immutable';

// setup the entries in the state tree
export function setEntries(state, entries) {
  return state.set('entries', List(entries));
}

// add the next function for state transitions
export function next(state) {
  const entries = state.get('entries');
  return state.merge({
    vote: Map({pair: entries.take(2)}),
    entries: entries.skip(2)
  });
}

// add function to allow for voting
export function vote(state, entry) {
  // use updateIn() which applies the function to the array
  return state.updateIn(
    ['vote', 'tally', entry], // keyPath
    0,                        // notSetValue
    tally => tally + 1        // updater
  );
}
