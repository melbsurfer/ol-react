import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Overdrive from 'react-overdrive';
import styled from 'styled-components';

import { THUMBNAIL_SERVICE } from './config';
import ImageThumbnail from './ImageThumbnail';

class Image extends Component {
  render() {
    console.log(`Image: ${this.props.data.properties.id.toString()}`);
    return (
      <div>
        <Link to={`/${this.props.data.properties.id}`}>
          <ImageOutline>
            <Overdrive id="foo" duration={1000}>
              {/* <ImageThumbnail
                id={this.props.data.properties.id}
                filename={this.props.data.properties.filename}
                entry_id={this.props.data.properties.entry_id}
                size={THUMBNAIL_SERVICE.size}
                format={THUMBNAIL_SERVICE.format}
              /> */}
              {/* <span>{this.props.data.properties.id}</span> */}
              <div id="test">TEST!</div>
            </Overdrive>
          </ImageOutline>
        </Link>
      </div>
    );
  }
}

export default Image;

const ImageOutline = styled.div`
  box-shadow 0 0 35px black;
  color: white;
  text-align: center;
`;
