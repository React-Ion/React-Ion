import React from 'react';

class PreviewDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  callback() {

  }

  render() {
    return (
      <button
        className="preview-display"
        onClick={() => this.props.toggleTextModal(
          'enter link url',
          'preview',
          this.callback,
        )}

      >
        <i className="fa fa-link" aria-hidden="true" /> Preview
      </button>
    );
  }
};

export default PreviewDisplay;
