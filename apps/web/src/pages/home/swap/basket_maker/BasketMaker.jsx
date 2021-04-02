import React, { useMemo } from 'react';
import { _basket_maker, _wrapper, _container } from './BasketMaker.styled';
import { Market, MARKETS, TOKEN_MINTS } from '@project-serum/serum';
import { TokenListProvider } from '@solana/spl-token-registry';
import { PublicKey } from '@solana/web3.js';
import SerumAPI from 'core/api/serum/serum.api';
import HarmonyAPI from 'core/api/harmony/harmony.api';
import { useTokenList } from 'core/hooks/api/useTokenList';
import Category from './category/Category';
import { SWAP_LAYERS_REF } from 'core/remix/state/refs';
import { useSharedRef } from 'core/hooks/remix/useSharedRef';
import { AnimateBasketMaker } from '../animations';
import { useBubble } from 'core/hooks/remix/useBubble';
import {
  ANIMATING_TRADE,
  SWAP_BASKET_ACTIVE,
  WALLET_ACTIVE,
} from 'core/remix/state/bubbles';
import { useKeys } from 'core/hooks/useKeys';

export const BasketMaker = ({ top = 0, ...props }) => {
  const key = useKeys(4);
  const [active] = useBubble(SWAP_BASKET_ACTIVE);
  const [walletActive] = useBubble(WALLET_ACTIVE);
  const info = useSharedRef(SWAP_LAYERS_REF);
  const net_height = info?.height ? (info.height || 0) - top : 0;

  const watch = [net_height, active, walletActive];
  return useMemo(
    () => (
      <_basket_maker
        {...key[1]}
        $top={top}
        $active={walletActive}
        $height={net_height}
        $right={active === 'right'}
        {...props}
      >
        <AnimateBasketMaker {...key[0]}>
          <_wrapper $height={net_height}>
            <_container
              {...key[2]}
              $active={active}
              $right={active === 'right'}
            >
              {/*<Category {...key[3]} active={active} type={'CATEGORY_SERUM'} />*/}
            </_container>
          </_wrapper>
        </AnimateBasketMaker>
      </_basket_maker>
    ),
    watch,
  );
};

export default BasketMaker;
