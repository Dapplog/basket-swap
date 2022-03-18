import { Cluster } from "@solana/web3.js";
import bs58 from "bs58";
import { Keypair } from "@solana/web3.js";

require("dotenv").config();

// Endpoints, connection
export const ENV: Cluster = (process.env.CLUSTER as Cluster) || "mainnet-beta";

// Sometimes, your RPC endpoint may reject you if you spam too many RPC calls. Sometimes, your PRC server
// may have invalid cache and cause problems.
export const SOLANA_RPC_ENDPOINT =
  ENV === "devnet"
    ? "https://api.devnet.solana.com"
    : "https://ssc-dao.genesysgo.net";

// Wallets
export const WALLET_PRIVATE_KEY =
  process.env.WALLET_PRIVATE_KEY || "PASTE YOUR WALLET PRIVATE KEY";
export const USER_PRIVATE_KEY = bs58.decode(WALLET_PRIVATE_KEY);
export const USER_KEYPAIR = Keypair.fromSecretKey(USER_PRIVATE_KEY);

// Token Mints
export const INPUT_MINT_ADDRESS =
  ENV === "devnet"
    ? "So11111111111111111111111111111111111111112" // SOL
    : "So11111111111111111111111111111111111111112"; // 

export const OUTPUT_MINT_ADDRESS =
  ENV === "devnet"
    ? "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v" // 
    : "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"; // 

// Interface
export interface Token {
  chainId: number; // 101,
  address: string; // '8f9s1sUmzUbVZMoMh6bufMueYH1u4BJSM57RCEvuVmFp',
  symbol: string; // 'TRUE',
  name: string; // 'TrueSight',
  decimals: number; // 9,
  logoURI: string; // 'https://i.ibb.co/pKTWrwP/true.jpg',
  tags: string[]; // [ 'utility-token', 'capital-token' ]
}

export interface BasketItem {
  token: Token;
  percentage: number;
}

const route_to = [
  'AbQBt9V212HpPVk64YWAApFJrRzdAdu66fwF9neYucpU',
  '34FtphdPUicFi8wEskVtRrodHFozQkFjn3jovzChTBAQ',
  'A3SjGgLHEZ4JqGNPdaMcmxuxYSnhYvDjU2S9RtyqBkiH',
  '42f2yFqXh8EDCRCiEBQSweWqpTzKGa9DC8e7UjUfFNrP',
  'HgTHf7EQSUab7FCF5hSREib5QQivAo5Exboo1mS1iykx',
  'FyXUVbGLAaw2iPR2s3B5ZaLLNbwMyfTwj8ey2jqKRhwT',
  'DJN7Wo1htAH5RrSzoiTp4rPPcmFJaoXk4MbpHbTbRjon'
]