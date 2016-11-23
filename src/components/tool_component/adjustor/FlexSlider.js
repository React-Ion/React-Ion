import _ from 'lodash';
import React, { PropTypes } from 'react';
import Slider from './Slider';

const FlexSlider = ({ updateProps, selected, info, store }) => (
  <div
    className={_.includes(store.pages, selected)
      ? 'hidden'
      : 'slider'
    }
  >
    <Slider
      min={0}
      max={10}
      step={1}
      unit={null}
      propName={'flex'}
      selected={selected}
      updateProps={updateProps}
      title={'FLEX'}
      initialValue={info.props.flex}
    />
  </div>
);

FlexSlider.propTypes = {
  store: PropTypes.object.isRequired,
  info: PropTypes.object.isRequired,
  selected: PropTypes.number.isRequired,
  updateProps: PropTypes.func.isRequired,
};

export default FlexSlider;
