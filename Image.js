import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Image extends Component {
  render() {
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
        <p style={pStyle}>
          Image
        </p>
      </div>
    )
  }
}

export default Image;