import React from 'react';
import { _input, _float, _arrow, _ticker, _symbol } from './Input.styled';
import Arrow from '../../../../../libs/design/icons/arrow/Arrow';

export const Input = ({ active, arrow, symbol, ...props }) => {
  const left = arrow === 'left';
  const right = arrow === 'right';

  return (
    <_input $active={active}>
      {left && (
        <_float $left={left}>
          <_arrow $left>
            <Arrow />
          </_arrow>
        </_float>
      )}
      <input
        {...props}
        value={''}
        onChange={() => 'hello'}
        placeholder={'0.00'}
      />
      <_ticker>
        <_symbol>{symbol}</_symbol>
      </_ticker>
      {right && (
        <_float>
          <_arrow>
            <Arrow />
          </_arrow>
        </_float>
      )}
    </_input>
  );
};

export default Input;
