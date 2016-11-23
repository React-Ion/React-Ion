import React, { PropTypes } from 'react';
import '../../../scss/textInputModal.scss';

class TextInputModal extends React.Component {

  handleKeyPress(e) {
    if (e.charCode === 13) {
      this.props.textModal.callback(this.text.value);
      this.props.closeTextModal();
      this.text.value = '';
    }
  }

  render() {
    const { textModal, closeTextModal } = this.props;
    const { callback, showing, action, placeholder } = textModal;
    let className = 'modal-hidden';
    if (action === 'text') {
      className = showing ? 'modal-wrapper' : 'modal-hidden';
    }
    return (
      <div className={className}>
        <div className="modal">
          <button
            className="close-button"
            onClick={() => {
              this.text.value = '';
              closeTextModal();
            }}
          > <i className="fa fa-window-close" aria-hidden="true" />
          </button>
          <input
            placeholder={placeholder.toUpperCase()}
            type="text"
            onKeyPress={this.handleKeyPress.bind(this)}
            ref={i => (this.text = i)}
          />
          <button
            className="submit-button"
            onClick={(e) => {
              e.preventDefault();
              () => console.log(this.text.value)
              callback(this.text.value);
              closeTextModal();
              this.text.value = '';
            }}
          > SUBMIT
          </button>
        </div>
      </div>
    );
  }
}

TextInputModal.propTypes = {
  textModal: PropTypes.object.isRequired,
  closeTextModal: PropTypes.func.isRequired,
};

export default TextInputModal;
