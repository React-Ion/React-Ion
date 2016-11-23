import React, { PropTypes } from 'react';

class TextColor extends React.Component {
  render() {
    const { updateProps, selected } = this.props;
    const action = () => updateProps(
      'color',
      this.textColor.value,
      selected,
    );

    return (
      <div className="color-picker">
        <input
          type="color"
          ref={i => (this.textColor = i)}
          onClick={action}
          onChange={action}
        />
      </div>
    );
  }
}

TextColor.propTypes = {
  selected: PropTypes.number.isRequired,
  updateProps: PropTypes.func.isRequired,
};

export default TextColor;
