/* global describe it */
import {
  promiseThat,
  fulfilled,
  hasProperty,
  isRejectedWith,
} from 'hamjest';
import GroupedKatas from './load-grouped-katas';
import {
  GROUPED_KATAS_URL,
  ALL_KATAS_URL,
} from './config';

function loadGroupedKatasFrom(url) {
  return new GroupedKatas().load(url);
}

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
