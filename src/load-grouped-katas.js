import fetch from 'node-fetch';

function loadData(url) {
  return fetch(url)
    .then(response => response.json())
    .catch(() => { throw 'Error loading katas.'; });
}

function verifyData(groupedKatas) {
  if ('groups' in groupedKatas) {
    return groupedKatas;
  }
  throw 'Invalid kata data.';
}

export function loadGroupedKatasFrom(url) {
  return loadData(url)
    .then(verifyData)
  ;
}
