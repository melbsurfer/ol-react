import React, { Component } from 'react';
import { THUMBNAIL_SERVICE } from './config';

class ImageThumbnail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      thumbUrl: '',
    };
  }

  componentDidMount() {
    // console.log('props: ', this.props);
    const url = `${THUMBNAIL_SERVICE.url
    }?filename=${this.props.filename
    }&entry_id=${this.props.entry_id
    }&size=${this.props.size
    }&format=${this.props.format}`;

    this.setState({
      thumbUrl: url,
    });
  }

  render() {
    return (
      <div>
        <img src={this.state.thumbUrl} alt="thumbnail" />
      </div>

    );
  }
}

// ImageThumbnail.propTypes = {
//   filename: React.PropTypes.string.isRequired,
//   entry_id: React.PropTypes.string.isRequired,
//   size: React.PropTypes.number.isRequired,
//   format: React.PropTypes.string.isRequired
// }

export default ImageThumbnail;
