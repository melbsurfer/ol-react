import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { THUMBNAIL_SERVICE } from './config'
import ImageThumbnail from './ImageThumbnail';

class Image extends Component {
  render() {
    console.log(this.props);
    const divStyle = {
      borderColor: 'red',
      border: 'solid',
      width: '100px',
      height: '100px'
    }
    const pStyle = {
      color: 'purple'
    }
    return (
      <div style={divStyle}>
        <p style={pStyle}>Image</p>
        {/* <p style={pStyle}>Image: {this.props.data.properties.id}</p>
        <ImageThumbnail
          filename={this.props.data.properties.filename}
          entry_id={this.props.data.properties.entry_id}
          size={THUMBNAIL_SERVICE.size}
          format={THUMBNAIL_SERVICE.format}
        /> */}
      </div>
    )
  }
}

export default Image;