import React from 'react';

class ColorPicker extends React.Component {
  render() {
    const { updateProps, selected } = this.props;
    const action = () => updateProps(
      'backgroundColor',
      this.backgroundColor.value,
      selected,
    );

    return (
      <div className="color-picker">
        <input
          type="color"
          ref={i => (this.backgroundColor = i)}
          onClick={action}
          onInput={action}
        />
      </div>
    );
  }
}

export default ColorPicker;