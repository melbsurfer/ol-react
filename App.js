import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { WFS_URL, THUMBNAIL_SERVICE } from './config';
import OlMap from './OlMap'

class App extends Component {
  componentDidMount(){
    console.log(`${WFS_URL}`);
    console.log(THUMBNAIL_SERVICE);
  }
  render(){
    return (
      <div>
        <h1>Openlayers with React</h1>
        <OlMap/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);