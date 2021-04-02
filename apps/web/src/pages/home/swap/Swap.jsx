import React from 'react';
import { _swap, _card, _view, _layers, _layer } from './Swap.styled';
import Review from './views/review/Review';
import Wallet from './views/wallet/Wallet';
import BasketMaker from './views/basket/BasketMaker';
import { AnimateBackground, AnimateViewCard } from './animations';
import { SWAP_LAYERS_REF } from 'core/remix/state/refs';
import { useRemixRef } from 'core/hooks/remix/useRemixRef';
import Trade from './views/trade/Trade';
import { useRemix } from 'core/hooks/remix/useRemix';
import { VIEW_POSITION, VIEW_SWAP } from 'core/remix/state/bubbles';

const Swap = () => {
  const [view] = useRemix(VIEW_POSITION, VIEW_SWAP);
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
