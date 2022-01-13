import  React, { useEffect } from 'react';
import { _list, _item, _bubble, _icon, _name } from './List.styled';
import MathWallet from 'design/icons/math_wallet/MathWallet';
import Ledger from 'design/icons/ledger/Ledger';
import { useTranslation } from 'react-i18next';
import Phantom from 'design/icons/phantom/Phantom';
import { COLOR_LEDGER, COLOR_MATH, COLOR_PHANTOM } from 'design/colors/colors';
import usePhantomConnect from 'core/hooks/usePhantomConnect';
const log = console.log;

export const List = () => {
  const { t } = useTranslation();
  // const { usePhantomConnect } = usePhantomConnect();
  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;

      if (solana) {
        if (solana.isPhantom) {
          console.log('Phantom wallet found!');
        }
      } else {
        alert('Solana object not found! Get a Phantom Wallet 👻');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <_list>
      <_item>
        <_bubble $logo={COLOR_MATH}>
          <_icon $logo={COLOR_MATH}>{MathWallet()}</_icon>
        </_bubble>
        <_name>{t('wallet.coming.soon')}</_name>
      </_item>
      <button onClick={() => checkIfWalletIsConnected()}>
        <_item >
          <_bubble $logo={COLOR_PHANTOM} >
            <_icon $logo={COLOR_PHANTOM} >{Phantom()}</_icon>
          </_bubble>
          <_name>{t('wallet.coming.soon')}</_name>
        </_item>
      </button>
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
