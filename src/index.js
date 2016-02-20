import GroupedKatas from './grouped-katas.js';
import {GROUPED_KATAS_URL} from './config.js';

import React from 'react';
import ReactDOM from 'react-dom';

class Page extends React.Component {
  render() {
    return <div>Hi I am react</div>;
  }
}

new GroupedKatas()
  .load(GROUPED_KATAS_URL)
  .then(groupedKatas => {
    ReactDOM.render(<Page/>, document.getElementById('app'));
  });