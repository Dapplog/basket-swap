import React from 'react';
import {
  _qr,
  _container,
  _code,
  _name,
  _title,
  _float,
  _logo,
} from './QR.styled';
import { useTranslation } from 'react-i18next';
import QRCode from 'qrcode.react';
import { withTheme } from 'styled-components';
import WalletConnect from 'design/icons/wallet_connect/WalletConnect';
import { useRemixRef } from 'core/hooks/remix/useRemixRef';
import { QR_LAYERS_REF } from 'core/remix/state/refs';
import Proxy from '../../../../../../shared/proxy/Proxy';

export const QR = withTheme(({ theme }) => {
  const { t } = useTranslation();
  const [qr_ref] = useRemixRef(QR_LAYERS_REF);

  return (
    <_qr ref={qr_ref}>
      <Proxy ref_id={QR_LAYERS_REF} />
      <_container>
        <_code>
          <QRCode renderAs="svg" value="https://basketswap.io" />
          <_float>
            <_logo>{WalletConnect()}</_logo>
          </_float>
        </_code>
        <_title>
          <_name>{t('wallet.coming.soon')}</_name>
        </_title>
      </_container>
    </_qr>
  );
});

export default QR;
