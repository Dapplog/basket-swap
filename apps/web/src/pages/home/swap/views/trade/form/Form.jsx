import React, { useMemo, useLayoutEffect } from 'react';
import { _form, _section, _weights } from './Form.styled';
import Percent from '../../../../../../shared/percent/Percent';
import Input from '../../../../../../shared/forms/input/Input';
// import Swap from './Serum.swp.js';
import { Account, Connection, PublicKey } from '@solana/web3.js';
import { Market, MARKETS } from '@project-serum/serum';
let log = console.log;

export const Form = () => {
  let allMarkets = [
    "9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin",
    "GekRdc4eD9qnfPTjUMK5NdQDho8D9ByGrtnqhMNCTm36",
    "HkLEttvwk2b4QDAHzNcVtxsvBG35L1gmYY4pecF9LrFe",
    "CRW23rK5LksqowrfpQTEUVEFUDNDLF34STyW7gXV18Xt",
  ]
  for (let marketId in allMarkets) {
    
    log(marketId, MARKETS.find(
      (m) =>
        m.address.toBase58() === marketId && m.programId.toBase58() === programId,
    ));
    }
  let marketId = new PublicKey('9wFFyRfZBsuAha4YcuxcXLKwMxJR43S7fPfQLusDBzvT')
  let programId = new PublicKey('9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin')
  let connection = new Connection('https://api.mainnet-beta.solana.com');
  log("Connection: ", connection)
  let market = null;
  const knownMarket = MARKETS.find(
    (m) =>
      m.address.toBase58() === marketId.toBase58() && m.programId.toBase58() === programId.toBase58(),
  );
  log("knownMarket:", knownMarket)
  const knownProgram = MARKETS.find(
    (m) => m.programId.toBase58() === programId.toBase58(),
  );
  log("knownProgram: ",knownProgram)
  useLayoutEffect(() => {
    (async() => {
      log('cool');
      log(await connection.getAccountInfo(marketId));
      log('good');
      if (window.fetch) Market.load(
        // new Connection('http://localhost:8899')
        // new Connection('https://devnet.solana.com')
        // new Connection('https://api.devnet.solana.com')
        connection
        ,
        marketId,
        {},
        programId,
      )
        .then((m) => {
          log("setting market")
          log(m);
          market = m;
        })
        .catch((e) => {
          log("market failed", e)
        })
      log("just after market set")
    })()
    
    }, []);

  const Swap = async (market) => {
    log("trying to serum swap")
    let localhostPhantomWalletAddress = "9oTpBeexxPmLGwjQFHeQhmFrYg3ouvxQ7ryyHGXwHATn";
    let wallet4PhantomWalletAddress = "HdyGV8mN3tqGwxiH4bvSW62uBpRGPyodaZTY3gfuG69U";

    log("just before market set")
    // log(connection)
    // let market = await Market.load(connection, marketAddress).catch(log("the big bad"))
    log(market)
    // Fetching orderbooks
    let bids = await market.loadBids(connection);
    let asks = await market.loadAsks(connection);
    // L2 orderbook data
    for (let [price, size] of bids.getL2(20)) {
    log("orderbook price and size")
    console.log(price, size);
    }
    // Full orderbook data
    for (let order of asks) {
    log("full orderbook data")
    console.log(
        order.orderId,
        order.price,
        order.size,
        order.side, // 'buy' or 'sell'
    );
    }

    // Placing orders
    let owner = new Account(localhostPhantomWalletAddress);
    let payer = new PublicKey(localhostPhantomWalletAddress); // spl-token account
    await market.placeOrder(connection, {
    owner,
    payer,
    side: 'buy', // 'buy' or 'sell'
    price: 123.45,
    size: 0.1,
    orderType: 'limit', // 'limit', 'ioc', 'postOnly'
    });


    // Retrieving open orders by owner
    let myOrders = await market.loadOrdersForOwner(connection, owner.publicKey);

    // // Cancelling orders
    // for (let order of myOrders) {
    // await market.cancelOrder(connection, owner, order);
    // }

    // Retrieving fills
    for (let fill of await market.loadFills(connection)) {
      log("retrieving fills")
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
        let baseTokenAccount = new PublicKey(wallet4PhantomWalletAddress);
        let quoteTokenAccount = new PublicKey(wallet4PhantomWalletAddress);

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

  const watch = [];
  return useMemo(
    () => (
      <_form>
        <_section>
          <Input arrow={'left'} symbol={'UST'} />
        </_section>
        <_weights>
          <Percent percent={1} />
        </_weights>
        <_section>
          <Input arrow={'right'} symbol={'SRM'} />
        </_section>
        <button onClick={() => Swap()}>
          Swap!
        </button>
      </_form>
    ),
    watch,
  );
};
export default Form;
