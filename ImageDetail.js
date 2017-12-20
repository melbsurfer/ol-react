import React, { Component } from 'react';

import { THUMBNAIL_SERVICE } from './config';

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
  }

  render() {
    // console.log(this.state.images[0].properties.filename);
    if (this.state.images.length === 0) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <h1>Image Detail</h1>
        <ImageThumbnail
          filename={this.state.images[0].properties.filename}
          entry_id={this.state.images[0].properties.entry_id}
          size={THUMBNAIL_SERVICE.size}
          format={THUMBNAIL_SERVICE.format}
        />
      </div>
    );
  }
}

export default ImageDetail;
