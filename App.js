import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { WFS_URL, THUMBNAIL_SERVICE } from './config';
import OlMap from './OlMap';
import ImageGrid from './ImageGrid';
import Wfs from './libs/Wfs';

class App extends Component {
  componentDidMount(){
    const wfs = new Wfs();

    console.log('hits',
      wfs.getDataHits().then(function(hits) {
        console.log('wfs.getDataHits: ', hits);
      })
    );

    console.log('data',
      wfs.getData().then(function(data) {
        console.log('wfs.getData: ', data);
      })
    )

  }
  render() {
    return (
      <div>
        <h1>Openlayers | React</h1>
        <ImageGrid />
        <OlMap/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);