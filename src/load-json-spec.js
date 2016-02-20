import assert from 'assert';

describe('test setup', () => {
  it('works?', () => {
    assert(true);
  });
});

const KATAS_URL = 'http://katas.tddbin.com/katas/es6/language/__grouped__.json';

describe('load the katas from katas.tddbin.com', () => {
  it('works', () => {
    return loadKatasFrom(KATAS_URL)
      .then(groupedKatas => assert('groups' in groupedKatas))
    ;
  });
});

import fetch from 'node-fetch';
function loadKatasFrom(url) {
  return fetch(url)
    .then(response => response.json());
}
