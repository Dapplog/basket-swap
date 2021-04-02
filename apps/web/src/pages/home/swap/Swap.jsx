import React, { useState, useRef, useLayoutEffect } from 'react';
import {
  _swap,
  _card,
  _container,
  _center,
  _top,
  _bottom,
  _view,
  _layers,
  _layer,
  _wrapper,
  _form,
  _basket,
  _coin,
  _chevron,
  _float,
  _actions,
  _icon,
} from './Swap.styled';
import Ribbon from '../../../shared/ribbon/Ribbon';
import Form from './form/Form';
import Review from './review/Review';
import Wallet from './wallet/Wallet';
import BasketMaker from './basket_maker/BasketMaker';
import { AnimateBackground, AnimateViewCard } from './animations';
import { SWAP_LAYERS_REF } from 'core/remix/state/refs';
import { useRemixRef } from 'core/hooks/remix/useRemixRef';
import Trade from './trade/Trade';

const Swap = () => {
  const [layers_ref] = useRemixRef(SWAP_LAYERS_REF);

  return (
    <AnimateBackground>
      <_swap>
        <AnimateViewCard>
          <_card>
            <_view>
              <_layers ref={layers_ref}>
                <_layer $layer={1} bottom={54}>
                  <Wallet />
                </_layer>
                <_layer $layer={2}>
                  <BasketMaker top={54} />
                </_layer>
                <_layer $layer={3}>
                  <Trade top={54} />
                </_layer>
                <_layer $layer={4}>
                  <Review />
                </_layer>
              </_layers>
            </_view>
          </_card>
        </AnimateViewCard>
      </_swap>
    </AnimateBackground>
  );
};

export default Swap;
