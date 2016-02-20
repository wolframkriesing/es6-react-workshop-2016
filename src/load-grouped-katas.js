import fetch from 'node-fetch';

export default class GroupedKatas {
  load(url) {
    return loadGroupedKatasFrom(url);
  }
}

function loadData(url) {
  return fetch(url)
  .then(response => response.json())
  .catch(() => {
    throw 'Error loading katas.';
  });
}

function verifyData(groupedKatas) {
  if ('groups' in groupedKatas) {
    return groupedKatas;
  }
  throw 'Invalid kata data.';
}

function loadGroupedKatasFrom(url) {
  return loadData(url)
    .then(verifyData)
  ;
}
