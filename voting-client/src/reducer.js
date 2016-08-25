import {List, Map} from 'immutable';

// SET_STATE
function setState(state, newState) {
  return state.merge(newState);
}

// VOTE
function vote(state, entry) {
  const currentPair = state.getIn(['vote', 'pair'])
  // check if the entry is in the pair
  if (currentPair && currentPair.includes(entry)) {
    return state.set('hasVoted', entry);
  } else {
    return state;
  }
}

function resetVote(state) {
  const hasVoted = state.get('hasVoted')
  const currentPair = state.getIn(['vote','pair'], List())
  if (hasVoted && !currentPair.includes(hasVoted)) {
    return state.remove('hasVoted')
  } else {
    return state;
  }
}


export default function (state = Map(), action) {

  // handle SET_STATE
  switch (action.type) {
  case 'SET_STATE':
    return resetVote(setState(state, action.state))
  case 'VOTE':
    return vote(state, action.entry)
  }
  return state;
}
