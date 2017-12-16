import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import InfiniteScroll from 'react-infinite-scroller';

import Wfs from './libs/Wfs';
import Image from './Image';

class ImageGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      totalFeatures: 'Calculating...',
    };

    // this.handleLoadData = this.handleLoadData.bind(this);
  }

  handleLoadData = (page) => {

    console.log(`handleLoadMore page: ${page}`);

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

    console.log('ComponentDidMount firing!');
  }

  render() {
    console.log('state (in render): ', this.state);

    const divStyle = {
      borderColor: '#ccc',
      border: 'solid',
    };

    const pStyle = {
      color: 'purple',
    };

    if (this.state.images.length === 0) {
      return <p>Loading...</p>;
    }

    return (
        <div style={divStyle}>
          <p style={pStyle}>Image Grid</p>
          {this.state.images.map((image) => <Image key={image.properties.id} data={image} />)}
          {/* <InfiniteScroll
            pageStart={0}
            loadMore={this.handleLoadData}
            hasMore={true || false}
            loader={<div className="loader">Loading ...</div>}
            useWindow={true}
          >
          {<Image />}
          </InfiniteScroll> */}
        </div>
    );
  }
}

export default ImageGrid;
