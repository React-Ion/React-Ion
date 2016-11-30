import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import '../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss';

class Carousels extends Component {

  componentDidMount() {
    setTimeout(() => this.forceUpdate(), 50);
  }

  render() {
    const { settings, setSelected, selected, id, content } = this.props;
    const divStyles = {
      width: '100%',
      padding: '10px',
      height: 'auto',
      flexWrap: 'wrap',
      whiteSpace: 'initial',
      boxShadow: selected === id ? 'inset 0 0 0 1px #93FE3F' : 'inset 0 0 0 1px coral',
    };

    return (
      <div style={divStyles} onClick={e => setSelected(e, id)}>
        <ImageGallery
          items={content}
          {...settings}
        />
      </div>
    );
  }
}
export default Carousels;

