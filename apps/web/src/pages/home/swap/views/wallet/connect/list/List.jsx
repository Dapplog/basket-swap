import React from 'react';
import { _list, _item, _bubble, _icon, _name } from './List.styled';
import MathWallet from 'design/icons/math_wallet/MathWallet';
import Ledger from 'design/icons/ledger/Ledger';
import { useTranslation } from 'react-i18next';
import Phantom from 'design/icons/phantom/Phantom';
import { COLOR_LEDGER, COLOR_MATH, COLOR_PHANTOM } from 'design/colors/colors';

export const List = () => {
  const { t } = useTranslation();

  return (
    <_list>
      <_item>
        <_bubble $logo={COLOR_MATH}>
          <_icon $logo={COLOR_MATH}>{MathWallet()}</_icon>
        </_bubble>
        <_name>{t('wallet.coming.soon')}</_name>
      </_item>
      <_item>
        <_bubble $logo={COLOR_PHANTOM}>
          <_icon $logo={COLOR_PHANTOM}>{Phantom()}</_icon>
        </_bubble>
        <_name>{t('wallet.coming.soon')}</_name>
      </_item>
      <_item>
        <_bubble $logo={COLOR_LEDGER}>
          <_icon $logo={COLOR_LEDGER}>{Ledger()}</_icon>
        </_bubble>
        <_name>{t('wallet.coming.soon')}</_name>
      </_item>
    </_list>
  );
};

export default List;
