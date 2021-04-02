import React from 'react';
import { _option, _cutout, _fill, _indicator, _label } from './Option.styled';

const Option = ({ percent, step_size, position }) => {
  const label = `${position * step_size * 100}%`;
  const label_active = percent === step_size * position;
  const fill_active = percent >= step_size * position;

  return (
    <_option>
      <_indicator>
        <_cutout>
          <_fill $active={fill_active} />
        </_cutout>
      </_indicator>
      <_label $active={label_active}>{label}</_label>
    </_option>
  );
};

export default Option;
