import React, { useMemo } from 'react';
import {
  _basket_maker,
  _wrapper,
  _header,
  _content,
  _title,
  _search,
  _list,
  _card,
  _tokens,
  _actions,
  _add,
  _items,
} from './BasketMaker.styled';
import { Market, MARKETS, TOKEN_MINTS } from '@project-serum/serum';
import { TokenListProvider } from '@solana/spl-token-registry';
import { PublicKey } from '@solana/web3.js';
import SerumAPI from 'core/api/serum/serum.api';
import HarmonyAPI from 'core/api/harmony/harmony.api';
import { useTokenList } from 'core/hooks/api/useTokenList';
import { SWAP_LAYERS_REF } from 'core/remix/state/refs';
import { useSharedRef } from 'core/hooks/remix/useSharedRef';
import { AnimateView } from './animations/AnimateView';
import { AnimateMask } from './animations/AnimateMask';
import { AnimateContent } from './animations/AnimateContent';
import { useBubble } from 'core/hooks/remix/useBubble';
import {
  VIEW_BASKET_LEFT,
  VIEW_BASKET_RIGHT,
  VIEW_POSITION,
} from 'core/remix/state/bubbles';
import { useKeys } from 'core/hooks/useKeys';
import { useTranslation } from 'react-i18next';
import Search from './search/Search';
import Tokens from './tokens/Tokens';
import { AnimateHeader } from './animations/AnimateHeader';

export const BasketMaker = ({ top = 0, ...props }) => {
  const { t } = useTranslation();
  const key = useKeys(4);
  const [view, setView] = useBubble(VIEW_POSITION);
  const active_left = view === VIEW_BASKET_LEFT;
  const active_right = view === VIEW_BASKET_RIGHT;
  const active = active_left || active_right;
  const info = useSharedRef(SWAP_LAYERS_REF);
  const net_height = info?.height ? (info.height || 0) - top : 0;

  const watch = [net_height, view];
  return useMemo(
    () => (
      <AnimateMask>
        <_basket_maker {...key[1]} {...props}>
          <AnimateView {...key[0]}>
            <_wrapper $height={net_height}>
              <AnimateHeader>
                <_header>
                  <_title>
                    <h3>{t('basket.from')}</h3>
                  </_title>
                </_header>
              </AnimateHeader>
              <AnimateContent>
                <_content>
                  <_search>
                    <Search />
                  </_search>
                  <_list>
                    <_items>
                      <_card></_card>
                    </_items>
                  </_list>
                </_content>
              </AnimateContent>
              <_actions>
                <_tokens>
                  <Tokens />
                </_tokens>
                <_add>
                  <button>{t('basket.add.coin')}</button>
                </_add>
              </_actions>
            </_wrapper>
          </AnimateView>
        </_basket_maker>
      </AnimateMask>
    ),
    watch,
  );
};

export default BasketMaker;
