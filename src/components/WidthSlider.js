import React from 'react';
import _ from 'lodash';

export default class WidthSlider extends React.Component {

  componentDidMount() {
    this.updateWidth();
  }

  updateWidth() {
    const context = this;
    const width = this.props.info.props.width;

    if (width) {
      setTimeout(() => {
        context.width.value = width[0];
      });
    }
  }

  render() {
    const { updateProps, selected, info, store } = this.props;
    const direction = info.parent ? info.parent.props.flexDirection : null;

    this.updateWidth();
    return (
      <div
        className={_.includes(store.pages, selected) || direction === 'row'
          ? 'hidden'
          : 'slider'
        }
      > WIDTH
        <input
          type="range"
          min={0}
          max={100}
          step={10}
          ref={i => this.width = i}
          onChange={() => updateProps(
            'width',
            [this.width.value, '%'],
            selected,
            'onChange',
          )}
          onMouseDown={() => updateProps(
            'width',
            [this.width.value, '%'],
            selected,
            'onMouseDown',
          )}
          onMouseUp={() => updateProps(
            'width',
            [this.width.value, '%'],
            selected,
            'onMouseUp',
          )}

        />
      </div>
    );
  }
}
