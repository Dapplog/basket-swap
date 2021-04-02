import React from 'react';
import { _ribbon } from './Ribbon.styled';
import { _basket, _chevron, _coin } from '../Trade.styled';
import Chevron from 'design/icons/chevron/Chevron';
import Basket from 'design/icons/basket/Basket';
import { useKeys } from 'core/hooks/useKeys';

export const Ribbon = () => {
  const key = useKeys();

  return (
    <_ribbon>
      <_chevron {...key[8]}>
        <Chevron {...key[9]} />
      </_chevron>
      <_coin {...key[10]}>
        <div {...key[11]} />
      </_coin>
      <_basket {...key[12]}>
        <Basket {...key[13]} />
      </_basket>
    </_ribbon>
  );
};

export default Ribbon;
