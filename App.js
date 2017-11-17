import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { WFS_URL, THUMBNAIL_SERVICE } from './config';
import OlMap from './OlMap'
import Wfs from './libs/Wfs';

class App extends Component {
  componentDidMount(){
    const wfs = new Wfs();
    wfs.getFeature();
  }
  render(){
    return (
      <div>
        <h1>Openlayers | React</h1>
        <OlMap/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);