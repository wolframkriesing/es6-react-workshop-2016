import GroupedKatas from './grouped-katas.js';
import {GROUPED_KATAS_URL} from './config.js';

new GroupedKatas().load(GROUPED_KATAS_URL)
  .then(groupedKatas => {
    document.getElementById('app').innerHTML = JSON.stringify(groupedKatas);
  });