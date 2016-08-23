import {List, Map} from 'immutable';

// setup the intialState
export const INITIAL_STATE = Map();

// setup the entries in the state tree
export function setEntries(state, entries) {
  return state.set('entries', List(entries));
}

// function for getting vote results
export function getWinners(vote) {
  if (!vote) return [];

  const [a,b] = vote.get('pair');
  const aVotes =  vote.getIn(['tally', a], 0);
  const bVotes =  vote.getIn(['tally', b], 0);
  if (aVotes > bVotes) return [a];
  if (aVotes < bVotes) return [b];
  else                 return [a,b];
}

// next function for state transitions
export function next(state) {
  const entries = state.get('entries')
                       .concat(getWinners(state.get('vote')));
  // handle a winner
  if (entries.size == 1){
    return state.remove('vote')
                .remove('entries')
                .set('winner', entries.first());
  } else {
    return state.merge({
      vote: Map({pair: entries.take(2)}),
      entries: entries.skip(2)
    });
  }
}

// function to allow for voting
export function vote(voteState, entry) {
  // use updateIn() which applies the function to the array
  return voteState.updateIn(
    ['tally', entry],         // keyPath
    0,                        // notSetValue
    tally => tally + 1        // updater
  );
}
