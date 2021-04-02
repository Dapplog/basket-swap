import React, { useMemo } from 'react';
import { _connect, _container, _list, _walletconnect } from './Connect.styled';
import { useTranslation } from 'react-i18next';
import List from './list/List';
import QR from '../qr/QR';
import { AnimateConnect } from '../../../animations';
import { useKeys } from 'core/hooks/useKeys';

export const Connect = () => {
  const { t } = useTranslation();
  const key = useKeys(8);

  const watch = [];
  return useMemo(
    () => (
      <AnimateConnect {...key[0]}>
        <_connect {...key[1]}>
          <h3 {...key[2]}>{t('wallet.choose')}</h3>
          <_container {...key[3]}>
            <_list {...key[4]}>
              <List {...key[5]} />
            </_list>
            <_walletconnect {...key[6]}>
              <QR {...key[7]} />
            </_walletconnect>
          </_container>
        </_connect>
      </AnimateConnect>
    ),
    watch,
  );
};

export default Connect;
