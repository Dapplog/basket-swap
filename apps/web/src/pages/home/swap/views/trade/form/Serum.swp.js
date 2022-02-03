

import { Account, Connection, PublicKey } from '@solana/web3.js';
import { Market } from '@project-serum/serum';
let log = console.log;

export const Swap = async () => {
        log("trying to serum swap")
        let localhostPhantomWalletAddress = "9oTpBeexxPmLGwjQFHeQhmFrYg3ouvxQ7ryyHGXwHATn";
        let wallet4PhantomWalletAddress = "HdyGV8mN3tqGwxiH4bvSW62uBpRGPyodaZTY3gfuG69U";
        let solusdcMarket = "9wFFyRfZBsuAha4YcuxcXLKwMxJR43S7fPfQLusDBzvT";
        let solEth = "HkLEttvwk2b4QDAHzNcVtxsvBG35L1gmYY4pecF9LrFe"
        let testMarket = "CRW23rK5LksqowrfpQTEUVEFUDNDLF34STyW7gXV18Xt"
        let testMarket2 = "9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin"
        let connection = new Connection('http://localhost:8899');
        // let connection = new Connection('https://devnet.solana.com');
        let marketAddress = new PublicKey(testMarket2);
        log("testMarket2: ", testMarket2)
        try {
          let market = await Market.load(connection, marketAddress);
        } catch {
          log("getting market info didnt work")
        }
        log("just before market set")
        log(connection)
        let market = await Market.load(connection, marketAddress).catch(log("the big bad"))
        log("just after market set")
    
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