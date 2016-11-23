import React, { PropTypes } from 'react';

class PreviewDisplay extends React.Component {
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
}

PreviewDisplay.propTypes = {
  toggleTextModal: PropTypes.func.isRequired,
};

export default PreviewDisplay;
