import GroupedKatas from './grouped-katas.js';
import {GROUPED_KATAS_URL} from './config.js';

import React from 'react';
import ReactDOM from 'react-dom';
// import ReactDOMServer from 'react-dom/server'; //for server-side rendering

import KataGroupsComponent from './components/kata-groups';

class Page extends React.Component {
  render() {
    const katas = this.props.katas;
    const groupNames = Object.keys(katas.groups);
    return (
      <div>
        <h1>All ES6 katas</h1>
        <KataGroupsComponent groupNames={groupNames} />
      </div>
    );
  }
}

new GroupedKatas()
  .load(GROUPED_KATAS_URL)
  .then(groupedKatas => {
    ReactDOM.render(<Page katas={groupedKatas}/>, document.getElementById('app'));
    // console.log(ReactDOMServer.renderToString(<Page katas={groupedKatas}/>)); // for server-side rendering
  });

// call this file using `babel-node src/index.js > dist/index.html` to create a server-side 
// rendered HTML