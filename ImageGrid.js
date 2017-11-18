import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Image from './Image';

class ImageGrid extends Component {

    render() {

        const divStyle = {
          borderColor: '#ccc',
          border: 'solid'
        };

        const pStyle = {
          color: 'purple'
        }

        return (
          <div style={divStyle}>
            <p style={pStyle}>Image Grid</p>
            <Image />
          </div>
        )
    }

}

export default ImageGrid;