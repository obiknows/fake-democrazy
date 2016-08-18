/* src/core.js */
function getWinners(vote) {
  // if not vote, return a blank array
  if(!vote) return [];
  // else, get the pair of votes
  const [a,b] = vote.get('pair');
  const aVotes =  vote.getIn(['tally', a], 0);
  const bVotes =  vote.getIn(['tally', b], 0);
  // calculate the higher of the 2 and return that
  if      (aVotes > bVotes) return [a];
  else if (aVotes < bVotes) return [b];
  else                      return [a,b];
}

export function next(state) {
  const entries = state.get('entries')
                       .concat(getWinners(state.get('vote')));
  return state.merge({
    vote: Map({pair: entries.take(2)}),
    entries: entries.skip(2)
  });
}