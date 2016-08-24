import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocment,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils';
import {List, Map} from 'immutable';
import Results from '../../src/components/Results';
import {expect} from 'chai';

describe('Results', () => {

  // test that results are rendered
  it('renders entries with vote counts or zero', () => {
    const pair = List.of("Trainspotting","28 Days Later");
    const tally = Map({"Trainspotting": 5});
    const component = renderIntoDocment(
      <Results pair={pair} tally={tally} />
    );

    const entries = scryRenderedDOMComponentsWithTag(component, 'entry');
    const [train, days] = entries.map(e => e.textContent);

    expect(entries.length).to.equal(2);
    expect(train).to.contain('Trainspotting');
    expect(train).to.contain('5');
    expect(days).to.contain('28 Days Later');
    expect(days).to.contain('0');
  })

  // test that click on the 'Next' button works
  it('invokes the next callaback when next button is clicked', () => {
    let nextInvoked = false;
    const next = () => nextInvoked = true;

    const pair = List.of('Trainspotting', '28 Days Later');
    const component = renderIntoDocment(
      <Results pair={pair}
               tally={Map()}
               next={next} />
    )
    Simulate.click(ReactDOM.findDOMNode(component.refs.next));

    expect(nextInvoked).to.equal(true);
  })

  // test that a winner is rendered
  it('renders the winner when there is one', () => {
    const component = renderIntoDocment(
      <Results winner="Trainspotting"
               pair={["Trainspotting", "28 Days Later"]}
               tally={Map()} />
    )
    const winner = ReactDOM.findDOMNode(component.refs.winner)
    expect(winner).to.be.ok
    expect(winner.textContent).to.contain('Trainspotting')
  })
});
