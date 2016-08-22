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
  return state.updateIn(
    ['vote', 'tally', entry],
    0,
    tally => tally + 1
  );
}
