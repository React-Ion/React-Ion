import React, { PropTypes } from 'react';
import '../../../scss/textInputModal.scss';

class ListTextInputModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  addToList(item) {
    console.log("test");
    const list = this.state.list;
    list.push(item);
    this.setState({ list: list });
  }

  render() {
    const { textModal, closeTextModal } = this.props;
    const { callback, showing, action, placeholder } = textModal;
    let className = 'modal-hidden';
    if (action === 'list') {
      className = showing ? 'modal-wrapper' : 'modal-hidden';
    }

    const listNode = this.state.list.map((list) => {
      return (
        <div>{list}</div>
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

ListTextInputModal.propTypes = {
  textModal: PropTypes.object.isRequired,
  closeTextModal: PropTypes.func.isRequired,
};

export default ListTextInputModal;
