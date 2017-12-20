import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import InfiniteScroll from 'react-infinite-scroller';

import styled from 'styled-components';

import Wfs from './libs/Wfs';
import Image from './Image';

class ImageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      totalFeatures: 'Calculating...',
    };

    // this.handleLoadData = this.handleLoadData.bind(this);
  }

  handleLoadData = (page) => {

    //console.log(`handleLoadMore page: ${page}`);

    const wfs = new Wfs();

    wfs.getDataHits().then(function(hits) {
      //console.log('wfs.getDataHits: ', hits);
      this.setState({totalFeatures: hits});
    }.bind(this));

    wfs.getData().then(function(data) {
      //console.log('wfs.getData: ', data);
      this.setState({images: data});
    }.bind(this));

  }

  componentDidMount() {
    // const wfs = new Wfs();

    // wfs.getDataHits().then(function(hits) {
    //   //console.log('wfs.getDataHits: ', hits);
    //   this.setState({totalFeatures: hits});
    // }.bind(this));

    // wfs.getData().then(function(data) {
    //   //console.log('wfs.getData: ', data);
    //   this.setState({images: data});
    // }.bind(this));

    this.handleLoadData(0);

    //console.log('ComponentDidMount firing!');
  }

  render() {
    //console.log('state (in render): ', this.state);

    if (this.state.images.length === 0) {
      return <p>Loading...</p>;
    }

    return (
        <ImageGrid>
          {this.state.images.map((image) => <Image key={image.properties.id} data={image} />)}
        </ImageGrid>
    );
  }
}

export default ImageList;

const ImageGrid = styled.div`
  background: #222;
  display: grid;
  padding: 3rem;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  justify-items: center;
`;