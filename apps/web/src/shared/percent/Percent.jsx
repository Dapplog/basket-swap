import React, { useState } from 'react';
import { _percent } from './Percent.styled';
import Option from './option/Option';

const Percent = ({ callback }) => {
  const [percent, setPercent] = useState(0);

  return (
    <_percent>
      <Option
        percent={percent}
        step_size={0.25}
        position={1}
        click={setPercent}
      />
      <Option
        percent={percent}
        step_size={0.25}
        position={2}
        click={setPercent}
      />
      <Option
        percent={percent}
        step_size={0.25}
        position={3}
        click={setPercent}
      />
      <Option
        percent={percent}
        step_size={0.25}
        position={4}
        click={setPercent}
      />
    </_percent>
  );
};

export default Percent;
