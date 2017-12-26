import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Overdrive from 'react-overdrive';
import styled from 'styled-components';

import { THUMBNAIL_SERVICE } from './config';
import ImageThumbnail from './ImageThumbnail';

class Image extends Component {
  render() {
    console.log(`Image ID: ${this.props.data.properties.id.toString()}`);
    return (
      <div>
        <Link to={`/${this.props.data.properties.id}`}>
          <ImageOutline>
            <Overdrive id="{this.props.data.properties.id.toString()}">
              <div>
                <ImageThumbnail
                  id={this.props.data.properties.id}
                  filename={this.props.data.properties.filename}
                  entry_id={this.props.data.properties.entry_id}
                  size={THUMBNAIL_SERVICE.size}
                  format={THUMBNAIL_SERVICE.format}
                />
                <div>{this.props.data.properties.id}</div>
              </div>
            </Overdrive>
          </ImageOutline>
        </Link>
      </div>
    );
  }
}

export default Image;

const ImageOutline = styled.div`
  // box-shadow 0 0 35px black;
  color: white;
  text-align: center;
  background-color: green; //#222;
`;
