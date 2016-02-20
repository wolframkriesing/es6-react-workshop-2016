import {
  promiseThat, 
  fulfilled, 
  hasProperty,
  isRejectedWith,
} from 'hamjest';

const KATAS_URL = 'http://katas.tddbin.com/katas/es6/language/__grouped__.json';

describe('load the katas from katas.tddbin.com', () => {
  it('works', () => {
    return promiseThat(loadKatasFrom(KATAS_URL),
      fulfilled(hasProperty('groups'))
    );
  });
  it('throws when data cant be loaded', () => {
    return promiseThat(loadKatasFrom('invalid URL'),
      isRejectedWith('Error loading katas.')
    );
  });
});

import fetch from 'node-fetch';
function loadKatasFrom(url) {
  return fetch(url)
    .then(response => response.json())
    .catch(() => {
      throw 'Error loading katas.'
    })
  ;
}
