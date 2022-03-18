import { Connection, PublicKey } from "@solana/web3.js";
import fetch from "isomorphic-fetch";

import {
  getPlatformFeeAccounts,
  Jupiter,
  RouteInfo,
  TOKEN_LIST_URL,
} from "@jup-ag/core";
import {
  ENV,
  INPUT_MINT_ADDRESS,
  OUTPUT_MINT_ADDRESS,
  SOLANA_RPC_ENDPOINT,
  Token,
  USER_KEYPAIR,
  BasketItem,
} from "./constants";

const getPossiblePairsTokenInfo = ({
  tokens,
  routeMap,
  inputToken,
}: {
  tokens: Token[];
  routeMap: Map<string, string[]>;
  inputToken?: Token;
}) => {
  try {
    if (!inputToken) {
      return {};
    }

    const possiblePairs = inputToken
      ? routeMap.get(inputToken.address) || []
      : []; // return an array of token mints that can be swapped with SOL
    const possiblePairsTokenInfo: { [key: string]: Token | undefined } = {};
    possiblePairs.forEach((address) => {
      possiblePairsTokenInfo[address] = tokens.find((t) => {
        return t.address == address;
      });
    });
    // Perform your conditionals here to use other outputToken
    // const alternativeOutputToken = possiblePairsTokenInfo[USDT_MINT_ADDRESS]
    return possiblePairsTokenInfo;
  } catch (error) {
    throw error;
  }
};

const multiSwap = async ({
  jupiter,
  routeInfo,
}: { 
  jupiter: Jupiter;
  routeInfo: RouteInfo;
}) => {
/** To Multi swap, I could convert all to one coin, then convert that once coin to the others
 * 
 * 
*/

} 

const getRoutes = async ({
  jupiter,
  inputToken,
  outputToken,
  inputAmount,
  slippage,
}: {
  jupiter: Jupiter;
  inputToken?: Token;
  outputToken?: Token;
  inputAmount: number;
  slippage: number;
}) => {
  try {
    if (!inputToken || !outputToken) {
      console.log("inputToken: ", inputToken)
      console.log("outputToken: ", outputToken)
      return null;
    }

    console.log(
      `Getting routes for ${inputAmount} ${inputToken.symbol} -> ${outputToken.symbol}...`
    );
    const inputAmountInSmallestUnits = inputToken
      ? Math.round(inputAmount * 10 ** inputToken.decimals)
      : 0;
    const routes =
      inputToken && outputToken
        ? await jupiter.computeRoutes({
            inputMint: new PublicKey(inputToken.address),
            outputMint: new PublicKey(outputToken.address),
            inputAmount: inputAmountInSmallestUnits, // raw input amount of tokens
            slippage,
            forceFetch: true,
          })
        : null;
    // console.log("routes: ", routes)
    if (routes && routes.routesInfos) {
      console.log("Possible number of routes:", routes.routesInfos.length);
      console.log(
        "Best quote: ",
        routes.routesInfos[0].outAmount / 10 ** outputToken.decimals,
        `(${outputToken.symbol})`
      );
      return routes;
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
};

const executeSwap = async ({
  jupiter,
  routeInfo,
}: {
  jupiter: Jupiter;
  routeInfo: RouteInfo;
}) => {
  try {
    // Prepare execute exchange
    const { execute } = await jupiter.exchange({
      routeInfo,
    });

    // Execute swap
    const swapResult: any = await execute(); // Force any to ignore TS misidentifying SwapResult type

    if (swapResult.error) {
      console.log(swapResult.error);
    } else {
      console.log(`https://explorer.solana.com/tx/${swapResult.txid}`);
      console.log(
        `inputAddress=${swapResult.inputAddress.toString()} outputAddress=${swapResult.outputAddress.toString()}`
      );
      console.log(
        `inputAmount=${swapResult.inputAmount} outputAmount=${swapResult.outputAmount}`
      );
    }
  } catch (error) {
    throw error;
  }
};

const main = async () => {
  try {
    const connection = new Connection(SOLANA_RPC_ENDPOINT); // Setup Solana RPC connection
    const tokens: Token[] = await (await fetch(TOKEN_LIST_URL[ENV])).json(); // Fetch token list from Jupiter API

    // // If you want to add platformFee as integrator: https://docs.jup.ag/jupiter-core/adding-platform-fees
    // const platformFeeAndAccounts = {
    //   feeBps: 50,
    //   feeAccounts: await getPlatformFeeAccounts(
    //     connection,
    //     new PublicKey("9VjEE6cne5rNzrV9UPPZupab57bDGx3R9ZDG9QYMNAht") // The platform fee account owner
    //   ),
    // };

    //  Load Jupiter
    const jupiter = await Jupiter.load({
      connection,
      cluster: ENV,
      user: USER_KEYPAIR, // or public key
      // platformFeeAndAccounts,
    });

    //  Get routeMap, which maps each tokenMint and their respective tokenMints that are swappable
    const routeMap = jupiter.getRouteMap();
    // console.log("routeMap: ", routeMap)
    // If you know which input/output pair you want

    // Test, sol to USDC and USDT
    const USDC = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";
    const USDT = "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB";
    const SRM = "SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt";

    const outputToken1 = tokens.find((t) => t.address == USDT);
    const outputToken2 = tokens.find((t) => t.address == USDC);

    const basketItem1 = {percentage: .5, token: outputToken1}
    const basketItem2 = {percentage: .5, token: outputToken2}
    const basket = [
      basketItem1,
      basketItem2
    ]
    const inputToken = tokens.find((t) => t.address == INPUT_MINT_ADDRESS); // USDC Mint Info
    // const outputToken = tokens.find((t) => t.address == OUTPUT_MINT_ADDRESS); // USDT Mint Info

    // const outputToken = tokens.find((t) => true); // USDT Mint Info

    // Alternatively, find all possible outputToken based on your inputToken
    const possiblePairsTokenInfo = await getPossiblePairsTokenInfo({
      tokens,
      routeMap,
      inputToken,
    });
    let totalAmount = 0.00005
    basket.forEach(async function (item) {
      console.log("item: ", item);
      
      const outputToken = item.token;
      // console.log("inputAmount: ", totalAmount * item.percentage)
      const routes = await getRoutes({
        jupiter,
        inputToken,
        outputToken,
        inputAmount: 0.00002, // 1 unit in UI
        slippage: 1, // 1% slippage
      });
      console.log("Would execute here")
      // Routes are sorted based on outputAmount, so ideally the first route is the best.
      // await executeSwap({ jupiter, routeInfo: routes!.routesInfos[0] });
    }); 
   
    
  } catch (error) {
    console.log({ error });
  }
};

main();
