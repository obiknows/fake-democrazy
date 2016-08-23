import jsdom from 'jsdom';
import chat from 'chai';
import chatImmutable from 'chai-immutable';

const doc =  jsdom.jsdom('<!doctype html><html><body></body></html>')
const win = doc.defaultView;

global.document = doc;
global.window = win;

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
})

chai.use(chatImmutable);
