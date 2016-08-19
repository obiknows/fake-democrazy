import {List, Map} from 'immutable';
import {expect} from 'chai';

import {setEntries} from '../src/core';

describe('application logic', () => {

  describe('setEntries', () => {

    it('adds the entries to the state', () => {
      const state = Map();
      const entries = List.of('Trainspotting', '28 Days Later');
      const nextState = setEntries(state, entries);
      expect(nextState).to.equal(Map({
        entries : List.of('Trainspotting', '28 Days Later');
       }));
    });
  });
});

describe('next', () => {

  it('marks winner when just one entry left', () => {
    const state = Map({
      vote: Map ({
        pair: List.of('Trainspotting', '28 Days Later'),
        tally: Map({
          'Trainspotting': 4,
          '28 Days Later': 2
        })
      }),
      entries: List()
    });
    const nextState = next(state);
    expect (nextState).to.equal(Map({
      winner: 'Trainspotting'
    }));
  });
});