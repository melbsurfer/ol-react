import React, { Component } from 'react';
import Overdrive from 'react-overdrive';
import styled from 'styled-components';

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

    console.log('ImageDetails ID: ', this.state.images[0].properties.id.toString());

    return (
      <div>
        <h1>Image Detail</h1>
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
          </ImageInfo>
        </ImageWrapper>
      </div>
    );
  }
}

export default ImageDetail;

const ImageOutline = styled.div`
  box-shadow 0 0 35px black;
`;

const ImageWrapper = styled.div`
  position: relative:
  top: 50vh;
`;

const ImageInfo = styled.div`
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
  }
`;

const TestDiv = styled.div`
width: 300px;
height: 300px;
`;
