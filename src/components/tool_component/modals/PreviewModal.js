import React, { PropTypes } from 'react';
import '../../../scss/textInputModal.scss';
import { mapComponents } from '../../../lib/helpers';

class TextInputModal extends React.Component {
  render() {

    const pageRoute = [this.props.routes[this.props.pageSelected].present];

    const { textModal, closeTextModal } = this.props;
    const { callback, showing, action, placeholder } = textModal;

    let className = 'modal-hidden';
    const wrapperStyle = {};
    if (action === 'preview') {
      className = showing ? 'modal-wrapper' : 'modal-hidden';
      wrapperStyle.width = '100%';
      wrapperStyle.height = pageRoute[0].props.height[0];
    }
    return (
      <div className={className} style={wrapperStyle}>
        <div className="modal preview-modal" >
          <button
            className="close-button"
            onClick={() => {
              closeTextModal();
            }}
          > <i className="fa fa-window-close" aria-hidden="true" />
          </button>
          <div style={{width: '100%', height: '100%'}}>
          {mapComponents(pageRoute, this.props.selected)}
          </div>
        </div>
      </div>
    );
  }
}


TextInputModal.propTypes = {
  pageSelected: PropTypes.number.isRequired,
  textModal: PropTypes.object.isRequired,
  closeTextModal: PropTypes.func.isRequired,
};

export default TextInputModal;
