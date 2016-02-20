import assert from 'assert';

describe('test setup', () => {
  it('works?', () => {
    assert(true);
  });
});
import {promiseThat, isFulfilled, hasProperty} from 'hamjest';

const KATAS_URL = 'http://katas.tddbin.com/katas/es6/language/__grouped__.json';

describe('load the katas from katas.tddbin.com', () => {
  it('works', () => {
    return promiseThat(loadKatasFrom(KATAS_URL),
      isFulfilledWith(hasProperty('groups'))
    );
  });
});

import fetch from 'node-fetch';
function loadKatasFrom(url) {
  return fetch(url)
    .then(response => response.json());
}
