import React, { Component } from 'react';

import 'ol/ol.css';
import Map from 'ol/map';
import View from 'ol/view';
import TileLayer from 'ol/layer/tile';
import TileWMS from 'ol/source/tilewms';

import { BASIC_BASEMAP } from './config';

class OlMap extends Component {
  componentDidMount() {
    new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new TileWMS({
            url: `${BASIC_BASEMAP}/omar-mapproxy/service`,
            params: {
              VERSION: '1.1.1',
              LAYERS: 'o2-basemap-basic',
              FORMAT: 'image/jpeg',
            },
          }),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
  }

  render() {
    return (
      <div id="map" />
    );
  }
}

export default OlMap;
