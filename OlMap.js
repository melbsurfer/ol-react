import React, { Component } from 'react';

import 'ol/ol.css';
import Map from 'ol/map';
import View from 'ol/view';
import TileLayer from 'ol/layer/tile';
import XYZ from 'ol/source/xyz';

class OlMap extends Component {

  componentDidMount(){
    new Map({
      target: 'map',
        layers: [
          new TileLayer({
              source: new XYZ({
                  url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              })
          })
        ],
        view: new View({
            center: [0, 0],
            zoom: 2
        })
    });
  }

  render() {
      return(
        <div id='map'>
      );
  }

}

export default OlMap;