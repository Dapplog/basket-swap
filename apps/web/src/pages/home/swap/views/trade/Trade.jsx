import React, { useMemo } from 'react';
import {
  _trade,
  _wrapper,
  _actions,
  _basket,
  _center,
  _chevron,
  _coin,
  _float,
  _form,
  _icon,
  _title,
  _content,
} from './Trade.styled';
import { useSharedRef } from 'core/hooks/remix/useSharedRef';
import { SWAP_LAYERS_REF } from 'core/remix/state/refs';
import { AnimateMask } from './animations/AnimateMask';
import { AnimateView } from './animations/AnimateView';
import { useRemix } from 'core/hooks/remix/useRemix';
import {
  REVIEW_ACTIVE,
  SWAP_BASKET_ACTIVE,
  VIEW_POSITION,
  VIEW_REVIEW,
  VIEW_SWAP,
  VIEW_WALLET,
  WALLET_ACTIVE,
} from 'core/remix/state/bubbles';

import Settings from 'design/icons/settings/Settings';
import Ribbon from '../../../../../shared/ribbon/Ribbon';
import Chevron from 'design/icons/chevron/Chevron';
import Basket from 'design/icons/basket/Basket';
import Form from './form/Form';
import { useKeys } from 'core/hooks/useKeys';
import { useBubble } from 'core/hooks/remix/useBubble';
import { useTranslation } from 'react-i18next';

export const Trade = ({ top = 0 }) => {
  const { t } = useTranslation();
  const key = useKeys(30);
  const [view, setView] = useBubble(VIEW_POSITION);
  const active = view === VIEW_SWAP;
  const title_active = view === VIEW_WALLET || view === VIEW_REVIEW;
  const info = useSharedRef(SWAP_LAYERS_REF);
  const net_height = info?.height ? (info.height || 0) - top : 0;

  const watch = [net_height, view, active];
  return useMemo(
    () => (
      <AnimateMask>
        <_trade {...key[1]}>
          <AnimateView {...key[0]}>
            <_wrapper
              {...key[23]}
              $height={net_height}
              onClick={() => setView(VIEW_SWAP)}
            >
              <_center {...key[2]}>
                <_title {...key[24]}>
                  <_content $active={title_active} {...key[25]}>
                    <h3 {...key[26]}>{t('trade.title')}</h3>
                  </_content>
                </_title>
                <_float {...key[3]}>
                  <_actions {...key[4]}>
                    <_icon {...key[5]}>
                      {active && <Settings {...key[6]} />}
                    </_icon>
                  </_actions>
                </_float>
                <Ribbon {...key[7]} left y={'8px'}>
                  <_chevron {...key[8]}>
                    <Chevron {...key[9]} />
                  </_chevron>
                  <_coin {...key[10]}>
                    <div {...key[11]} />
                  </_coin>
                  <_basket {...key[12]}>
                    <Basket {...key[13]} />
                  </_basket>
                </Ribbon>
                <_form {...key[14]}>
                  <Form {...key[15]} />
                </_form>
                <Ribbon {...key[16]} right y={'-72px'}>
                  <_basket {...key[17]}>
                    <Basket {...key[18]} />
                  </_basket>
                  <_coin {...key[19]} $right>
                    <div {...key[20]} />
                  </_coin>
                  <_chevron {...key[21]} $right>
                    <Chevron {...key[22]} />
                  </_chevron>
                </Ribbon>
              </_center>
            </_wrapper>
          </AnimateView>
        </_trade>
      </AnimateMask>
    ),
    watch,
  );
};

export default Trade;
