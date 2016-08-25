import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {

  // test, does it handle SET_STATE
  it('handles SET_STATE', () =>  {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: {
        vote: {
          pair: List.of('Trainspotting', '28 Days Later'),
          tally: Map({Trainspotting: 1})
        }
      }
    }
    const nextState = reducer(initialState, action)

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Trainspotting', '28 Days Later'],
        tally: {Trainspotting: 1}
      }
    }))
  })

  // test, does it handle SET_STATE initially
  it('handles SET_STATE without initial state', () =>  {
    const action = {
      type: 'SET_STATE',
      state: {
        vote: {
          pair: List.of('Trainspotting', '28 Days Later'),
          tally: {Trainspotting: 1}
        }
      }
    }
    const nextState = reducer(initialState, action)

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Trainspotting', '28 Days Later'],
        tally: {Trainspotting: 1}
      }
    }))
  })

  //
})
