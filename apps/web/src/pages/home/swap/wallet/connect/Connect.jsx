import React from 'react';
import { _connect, _container, _list, _walletconnect } from './Connect.styled';
import { useTranslation } from 'react-i18next';
import List from './list/List';
import QR from '../qr/QR';
import { AnimateConnect } from '../../animations';

export const Connect = () => {
  const { t } = useTranslation();

  return (
    <AnimateConnect>
      <_connect>
        <h3>{t('wallet.choose')}</h3>
        <_container>
          <_list>
            <List />
          </_list>
          <_walletconnect>
            <QR />
          </_walletconnect>
        </_container>
      </_connect>
    </AnimateConnect>
  );
};

export default Connect;
