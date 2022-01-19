import  React, { useEffect, useState } from 'react';
import { _list, _item, _bubble, _icon, _name } from './List.styled';
import MathWallet from 'design/icons/math_wallet/MathWallet';
import Ledger from 'design/icons/ledger/Ledger';
import { useTranslation } from 'react-i18next';
import Phantom from 'design/icons/phantom/Phantom';
import { COLOR_LEDGER, COLOR_MATH, COLOR_PHANTOM } from 'design/colors/colors';
import SerumSwap from 'core/api/serum/sereum.tmp.swp';
import { Account, Connection, PublicKey } from '@solana/web3.js';
import { Market } from '@project-serum/serum';
// import usePhantomConnect from 'core/hooks/usePhantomConnect';
import * as solanaWeb3 from '@solana/web3.js';


const log = console.log;

export const List = () => {
  const { t } = useTranslation();

  const [walletAddress, setWalletAddress] = useState(null);
  
  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;

      if (solana) {
        if (solana.isPhantom) {
          console.log('Phantom wallet found!');
          const response = await solana.connect({ onlyIfTrusted: true });
          console.log(
            'Connected with Public Key:',
            response.publicKey.toString()
          );
          log(response)
          setWalletAddress(response.publicKey.toString());
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const connectWallet = async () => {
    const { solana } = window;
  
    if (solana) {
      const response = await solana.connect();
      console.log('Connected with Public Key:', response.publicKey.toString());
      log(response)
      setWalletAddress(response.publicKey.toString());
    }
  };

  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);

  const Swap = async () => {
    const tmpAddress = "BgHvegZqBSh5XPik7RNRaWudFRU7x14CuFGAtQFWxFrK"
    log("trying to serum swap")
    let connection = new Connection('https://testnet.solana.com');
    let marketAddress = new PublicKey(tmpAddress);
    let market = await Market.load(connection, marketAddress);

    // Fetching orderbooks
    let bids = await market.loadBids(connection);
    let asks = await market.loadAsks(connection);
    // L2 orderbook data
    for (let [price, size] of bids.getL2(20)) {
    console.log(price, size);
    }
    // Full orderbook data
    for (let order of asks) {
    console.log(
        order.orderId,
        order.price,
        order.size,
        order.side, // 'buy' or 'sell'
    );
    }

    // Placing orders
    let owner = new Account(tmpAddress);
    let payer = new PublicKey(tmpAddress); // spl-token account
    await market.placeOrder(connection, {
    owner,
    payer,
    side: 'buy', // 'buy' or 'sell'
    price: 123.45,
    size: 17.0,
    orderType: 'limit', // 'limit', 'ioc', 'postOnly'
    });


    // Retrieving open orders by owner
    let myOrders = await market.loadOrdersForOwner(connection, owner.publicKey);

    // Cancelling orders
    for (let order of myOrders) {
    await market.cancelOrder(connection, owner, order);
    }

    // Retrieving fills
    for (let fill of await market.loadFills(connection)) {
    console.log(
        fill.orderId,
        fill.price,
        fill.size,
        fill.side,
    );
    }

    // Settle funds
    for (let openOrders of await market.findOpenOrdersAccountsForOwner(
    connection,
    owner.publicKey,
    )) {
    if (openOrders.baseTokenFree > 0 || openOrders.quoteTokenFree > 0) {
        // spl-token accounts to which to send the proceeds from trades
        log("Wallet Address in swap: ", walletAddress)
        let baseTokenAccount = new PublicKey(tmpAddress);
        let quoteTokenAccount = new PublicKey(tmpAddress);

        await market.settleFunds(
        connection,
        owner,
        openOrders,
        baseTokenAccount,
        quoteTokenAccount,
        );
    }
    }
}
  
  return (
    <_list>
      <_item>
        <_bubble $logo={COLOR_MATH}>
          <_icon $logo={COLOR_MATH}>{MathWallet()}</_icon>
        </_bubble>
        <_name>{t('wallet.coming.soon')}</_name>
      </_item>
      <button onClick={() => connectWallet()}>
      <_item >
        <_bubble $logo={COLOR_PHANTOM} >
          <_icon $logo={COLOR_PHANTOM} >{Phantom()}</_icon>
        </_bubble>
        <_name>{!walletAddress && "Connect to Phantom"}{walletAddress && "Connected"}</_name> 
      </_item>
    </button>
      <_item>
        <_bubble $logo={COLOR_LEDGER}>
          <_icon $logo={COLOR_LEDGER}>{Ledger()}</_icon>
        </_bubble>
        <_name>{t('wallet.coming.soon')}</_name>
      </_item>
      <button onClick={() => console.log(solanaWeb3)}>
        Swap!
      </button>
    </_list>
  );
};

export default List;
