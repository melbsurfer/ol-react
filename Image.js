import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { THUMBNAIL_SERVICE } from './config';
import ImageThumbnail from './ImageThumbnail';

class Image extends Component {
  render() {
    return (
      <Link to={`/${this.props.data.properties.id}`}>
        <ImageOutline>
          <ImageThumbnail
            filename={this.props.data.properties.filename}
            entry_id={this.props.data.properties.entry_id}
            size={THUMBNAIL_SERVICE.size}
            format={THUMBNAIL_SERVICE.format}
          />
          <span>{this.props.data.properties.id}</span>
        </ImageOutline>
      </Link>
    );
  }
}

export default Image;

const ImageOutline = styled.div`
  box-shadow 0 0 35px black;
  color: white;
  text-align: center;
`;
