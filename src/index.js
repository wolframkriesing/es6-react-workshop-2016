import GroupedKatas from './grouped-katas.js';
import {GROUPED_KATAS_URL} from './config.js';

import React from 'react';
import ReactDOM from 'react-dom';

class Page extends React.Component {
  render() {
    const katas = this.props.katas;
    const groupNames = Object.keys(katas.groups);
    return (
      <div>
        <h1>All ES6 katas</h1>
        {groupNames.map(groupName => <h2>{groupName}</h2>)}
      </div>
    );
  }
}

new GroupedKatas()
  .load(GROUPED_KATAS_URL)
  .then(groupedKatas => {
    ReactDOM.render(<Page katas={groupedKatas}/>, document.getElementById('app'));
  });