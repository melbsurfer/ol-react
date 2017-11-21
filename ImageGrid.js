import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Wfs from './libs/Wfs';
import Image from './Image';

class ImageGrid extends Component {
  constructor(props){
    super(props)
    this.state = {
      images: [],
      totalFeatures: 'Calculating...',
    }
  }

  componentDidMount(){

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

  render() {

    console.log('state (in render): ', this.state);

    const divStyle = {
      borderColor: '#ccc',
      border: 'solid'
    };

    const pStyle = {
      color: 'purple'
    }
    if (this.state.images.length === 0) {
      return <p>Loading...</p>
    }
    else {
      return (
        <div style={divStyle}>
          <p style={pStyle}>Image Grid</p>
          {this.state.images.map(function(image, i) {
            return <Image key={i} data={image} />
          })}
        </div>
      )
    }

  }

}

export default ImageGrid;