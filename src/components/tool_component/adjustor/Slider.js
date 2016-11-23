import React, { PropTypes } from 'react';

export default class HeightSlider extends React.Component {

  componentDidMount() {
    this.updateValue();
  }

  updateValue() {
    const context = this;
    const value = this.props.initialValue;
    if (value) {
      setTimeout(() => {
        context.slider.value = value;
      });
    }
  }

  render() {
    const {
      title,
      updateProps,
      selected,
      propName,
      min,
      max,
      step,
      unit,
    } = this.props;

    this.updateValue();

    return (
      <div> {title}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          ref={i => this.slider = i}
          onChange={() => {
            updateProps(
              propName,
              unit ? [this.slider.value, unit] : this.slider.value,
              selected,
              'onChange',
            );
          }}
          onMouseDown={() => {
            updateProps(
              propName,
              unit ? [this.slider.value, unit] : this.slider.value,
              selected,
              'onMouseDown',
            );
          }}
          onMouseUp={() => {
            updateProps(
              propName,
              unit ? [this.slider.value, unit] : this.slider.value,
              selected,
              'onMouseUp',
            );
          }}
        />
      </div>
    );
  }
}
