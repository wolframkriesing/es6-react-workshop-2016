import {
  promiseThat, 
  fulfilled, 
  hasProperty,
  isRejectedWith,
} from 'hamjest';

const ES6_KATAS_URL_PREFIX = 'http://katas.tddbin.com/katas/es6/language/';
const GROUPED_KATAS_URL = ES6_KATAS_URL_PREFIX + '__grouped__.json';
const ALL_KATAS_URL = ES6_KATAS_URL_PREFIX + '__all__.json';

describe('load the katas from katas.tddbin.com', () => {
  it('works', () => {
    return promiseThat(loadGroupedKatasFrom(GROUPED_KATAS_URL),
      fulfilled(hasProperty('groups'))
    );
  });
  it('throws when data cant be loaded', () => {
    return promiseThat(loadGroupedKatasFrom('invalid URL'),
      isRejectedWith('Error loading katas.')
    );
  });
  it('throws when the wrong data are loaded', () => {
    return promiseThat(loadGroupedKatasFrom(ALL_KATAS_URL),
      isRejectedWith('Invalid kata data.')
    );
  });
});

import fetch from 'node-fetch';
function loadGroupedKatasFrom(url) {
  return fetch(url)
    .then(response => response.json())
    .catch(() => {
      throw 'Error loading katas.'
    })
    .then(groupedKatas => {
      if ('groups' in groupedKatas) {
        return groupedKatas;
      }
      throw 'Invalid kata data.'
    })
  ;
}
