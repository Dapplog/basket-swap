import React, { useMemo } from 'react';
import {
  _wallet,
  _container,
  _action,
  _content,
  _button,
} from './Wallet.styled';
import IconWallet from 'design/icons/wallet/Wallet';
import { AnimateViewWallet } from '../../animations';
import { useTranslation } from 'react-i18next';
import { useKeys } from 'core/hooks/useKeys';
import {
  REVIEW_ACTIVE,
  VIEW_POSITION,
  VIEW_WALLET,
} from 'core/remix/state/bubbles';
import Connect from './connect/Connect';
import { useSharedRef } from 'core/hooks/remix/useSharedRef';
import { SWAP_LAYERS_REF } from 'core/remix/state/refs';
import { useBubble } from 'core/hooks/remix/useBubble';

export const Wallet = ({ top = 0, bottom = 0 }) => {
  const key = useKeys(9);
  const { t } = useTranslation();
  const [view, setView] = useBubble(VIEW_POSITION);
  const active = view === VIEW_WALLET;
  const info = useSharedRef(SWAP_LAYERS_REF);
  const net_height = info?.height ? (info.height || 0) - top - bottom : 0;

  const watch = [net_height, view, active];
  return useMemo(
    () => (
      <_wallet {...key[0]} $top={top} $height={net_height}>
        <_action {...key[7]}>
          <_content {...key[1]}>
            <AnimateViewWallet {...key[2]}>
              <_button {...key[3]} onClick={() => setView(VIEW_WALLET)}>
                <IconWallet {...key[4]} />
                <span {...key[5]}>{t('wallet.connect')}</span>
              </_button>
            </AnimateViewWallet>
          </_content>
        </_action>
        <_container {...key[6]} $height={net_height}>
          <Connect {...key[8]} />
        </_container>
      </_wallet>
    ),
    watch,
  );
};

export default Wallet;
