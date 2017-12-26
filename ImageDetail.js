import React, { Component } from 'react';
import Overdrive from 'react-overdrive';
import styled from 'styled-components';

import 'ol/ol.css';
import Map from 'ol/map';
import View from 'ol/view';
import TileLayer from 'ol/layer/tile';
import TileWMS from 'ol/source/tilewms';

import { THUMBNAIL_SERVICE } from './config';
import { BASIC_BASEMAP } from './config';

import Wfs from './libs/Wfs';
import ImageThumbnail from './ImageThumbnail';

class ImageDetail extends Component {
  constructor(props) {
    super(props);
    this.id = props.match.params.id;
    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    console.log(`ImageDetail mounted with id: ${this.id}`);

    // We need to make a WFS call to get the metadata
    // for this image
    const wfs = new Wfs();
    wfs.getData(this.id).then((data) => {
      console.log('wfs.getData: ', data);
      this.setState({ images: data });
    });

    // new Map({
    //   target: 'map',
    //   layers: [
    //     new TileLayer({
    //       source: new TileWMS({
    //         url: `${BASIC_BASEMAP}/omar-mapproxy/service`,
    //         params: {
    //           VERSION: '1.1.1',
    //           LAYERS: 'o2-basemap-basic',
    //           FORMAT: 'image/jpeg',
    //         },
    //       }),
    //     }),
    //   ],
    //   view: new View({
    //     center: [0, 0],
    //     zoom: 2,
    //   }),
    // });
  }

  render() {
    setTimeout(() => {
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
          zoom: 3,
        }),
      });
    }, 50);

    // console.log(this.state.images[0].properties.filename);
    if (this.state.images.length === 0) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <MapWrapper id="map" />
        <ImageWrapper>
          <ImageInfo>
            <ImageOutline>
              <Overdrive id={this.state.images[0].properties.id.toString()}>
                <ImageThumbnail
                  filename={this.state.images[0].properties.filename}
                  entry_id={this.state.images[0].properties.entry_id}
                  size={THUMBNAIL_SERVICE.size}
                  format={THUMBNAIL_SERVICE.format}
                />
              </Overdrive>
            </ImageOutline>
            <h3>&nbsp;&nbsp;{this.state.images[0].properties.id.toString()}</h3>
          </ImageInfo>
        </ImageWrapper>
      </div>
    );
  }
}

export default ImageDetail;

const MapWrapper = styled.div`
  margin-left: 50px;
  margin-right: 50px;
  height: 300px;
`;

const ImageOutline = styled.div`
  box-shadow 0 0 35px black;
`;

const ImageWrapper = styled.div`
  position: relative:
  top: -50vh;
`;

const ImageInfo = styled.div`
  text-align: left;
  padding: 1rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
  }
`;
