import React, { useMemo } from 'react';
import { _form, _section, _weights } from './Form.styled';
import Percent from '../../../../../../shared/percent/Percent';
import Input from '../../../../../../shared/forms/input/Input';

export const Form = () => {
  const watch = [];
  return useMemo(
    () => (
      <_form>
        <_section>
          <Input arrow={'left'} symbol={'UST'} />
        </_section>
        <_weights>
          <Percent percent={1} />
        </_weights>
        <_section>
          <Input arrow={'right'} symbol={'SRM'} />
        </_section>
      </_form>
    ),
    watch,
  );
};

export default Form;
