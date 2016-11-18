import React from 'react';

class FontSize extends React.Component {
  componentDidMount() {
    this.updateSize();
  }

  updateSize() {
    const context = this;
    const size = this.props.info.props.fontSize;

    if (size) {
      setTimeout(() => {
        context.size.value = size;
      });
    }
  }

  render() {
    const { updateProps, selected, info } = this.props;
    this.updateSize();
    return (
      <div className="font-size"> FONT SIZE
        <input
          type="range"
          min={0}
          max={100}
          ref={i => (this.size = i)}
          onChange={() => updateProps(
            'fontSize', this.size.value, selected, 'onChange',
          )}
          onMouseDown={() => updateProps(
            'fontSize', this.size.value, selected, 'onMouseDown',
          )}
          onMouseUp={() => updateProps(
            'fontSize', this.size.value, selected, 'onMouseUp',
          )}
        /> {info.props.fontSize ? `${info.props.fontSize}px` : ''}
      </div>
    );
  }
}

export default FontSize;
