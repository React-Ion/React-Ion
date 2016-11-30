import React, { PropTypes } from 'react';
import '../../../scss/textInputModal.scss';

class CarouselsInputModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  addToList(item) {
    const list = this.state.list;
    list.push({
      original: item,
      thumbnail: item,
    });
    this.setState({ list });
  }

  render() {
    const { textModal, closeTextModal } = this.props;
    const { callback, showing, action, placeholder } = textModal;
    let className = 'modal-hidden';
    if (action === 'carousels') {
      className = showing ? 'modal-wrapper' : 'modal-hidden';
    }

    const listNode = this.state.list.map((list, index) => {
      return (
        <div key={index}>{list.original}</div>
      );
    });

    return (
      <div className={className}>
        <div className="modal">
          <button
            className="close-button"
            onClick={() => {
              this.text.value = '';
              this.setState({ list: [] });
              closeTextModal();
            }}
          > <i className="fa fa-window-close" aria-hidden="true" />
          </button>
          <div>{listNode}</div>
          <input
            placeholder={placeholder.toUpperCase()}
            type="text"
            ref={i => (this.text = i)}
          />
          <button
            className="submit-button"
            onClick={(e) => {
              e.preventDefault();
              () => console.log(this.text.value)
              this.addToList(this.text.value);
              this.text.value = '';
            }}
          > ADD
          </button>
          <button
            className="submit-button"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              () => console.log(this.text.value)
              callback(this.state.list);
              this.setState({ list: [] });
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

CarouselsInputModal.propTypes = {
  textModal: PropTypes.object.isRequired,
  closeTextModal: PropTypes.func.isRequired,
};

export default CarouselsInputModal;
