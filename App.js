import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { WFS_URL, THUMBNAIL_SERVICE } from './config';
import OlMap from './OlMap';
import ImageGrid from './ImageGrid';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Openlayers | React | ImageGrid</h1>
        <ImageGrid />
        {/* <OlMap/> */}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);