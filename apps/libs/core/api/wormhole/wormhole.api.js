import {
  ChainId,
  CHAIN_ID_AVAX,
  CHAIN_ID_BSC,
  CHAIN_ID_ETH,
  CHAIN_ID_ETHEREUM_ROPSTEN,
  CHAIN_ID_POLYGON,
  CHAIN_ID_SOLANA,
  CHAIN_ID_TERRA,
  CHAIN_ID_OASIS,
  isEVMChain,
} from "@certusone/wormhole-sdk";

//https://github.com/certusone/wormhole/blob/dev.v2/bridge_ui/src/utils/consts.ts

export type Cluster = "testnet";

export const ETH_TOKEN_BRIDGE_ADDRESS = getAddress(
  CLUSTER === "mainnet"
    ? "0x3ee18B2214AFF97000D974cf647E7C347E8fa585"
    : CLUSTER === "testnet"
    ? "0xF890982f9310df57d00f659cf4fd87e65adEd8d7"
    : "0x0290FB167208Af455bB137780163b7B7a9a10C16"
);

export const WORMHOLE_RPC_HOSTS =
  CLUSTER === "mainnet"
    ? [
        "https://wormhole-v2-mainnet-api.certus.one",
        "https://wormhole.inotel.ro",
        "https://wormhole-v2-mainnet-api.mcf.rocks",
        "https://wormhole-v2-mainnet-api.chainlayer.network",
        "https://wormhole-v2-mainnet-api.staking.fund",
        "https://wormhole-v2-mainnet.01node.com",
      ]
    : CLUSTER === "testnet"
    ? ["https://wormhole-v2-testnet-api.certus.one"]
    : ["http://localhost:7071"];

export const WORMHOLE_RPC_HOST = "https://wormhole-v2-testnet-api.certus.one";

export const ETH_TOKEN_BRIDGE_ADDRESS = getAddress(
  CLUSTER === "mainnet"
    ? "0x3ee18B2214AFF97000D974cf647E7C347E8fa585"
    : CLUSTER === "testnet"
    ? "0xF890982f9310df57d00f659cf4fd87e65adEd8d7"
    : "0x0290FB167208Af455bB137780163b7B7a9a10C16"
);

export const SOL_BRIDGE_ADDRESS =
  CLUSTER === "mainnet"
    ? "worm2ZoG2kUd4vFXhvjh93UUH596ayRfgQ2MgjNMTth"
    : CLUSTER === "testnet"
    ? "3u8hJUVTA4jH1wYAyUur7FFZVQ8H635K3tSHHF4ssjQ5"
    : "Bridge1p5gheXUvJ6jGWGeCsgPKgnE3YgdGKRVCMY9o";

export const SOL_TOKEN_BRIDGE_ADDRESS =
    CLUSTER === "mainnet"
      ? "wormDTUJ6AWPNvk59vGQbDvGJmqbDTdgWgAqcLBCgUb"
      : CLUSTER === "testnet"
      ? "DZnkkTmCiFWfYTfT41X3Rd1kDgozqzxWaHqsw6W4x2oe"
      : "B6RHG3mfcckmrYN1UhmJzyS1XX3fZKbkeUcpJe9Sy3FE";

// ATTEST

// Submit transaction - results in a Wormhole message being published
const receipt = await attestFromEth(
    ETH_TOKEN_BRIDGE_ADDRESS,
    signer,
    tokenAddress
  );
  // Get the sequence number and emitter address required to fetch the signedVAA of our message
  const sequence = parseSequenceFromLogEth(receipt, ETH_BRIDGE_ADDRESS);
  const emitterAddress = getEmitterAddressEth(ETH_TOKEN_BRIDGE_ADDRESS);
  // Fetch the signedVAA from the Wormhole Network (this may require retries while you wait for confirmation)
  const { signedVAA } = await getSignedVAA(
    WORMHOLE_RPC_HOST,
    CHAIN_ID_ETH,
    emitterAddress,
    sequence
  );
  // On Solana, we have to post the signedVAA ourselves
  await postVaaSolana(
    connection,
    wallet,
    SOL_BRIDGE_ADDRESS,
    payerAddress,
    signedVAA
  );
  // Finally, create the wrapped token
  const transaction = await createWrappedOnSolana(
    connection,
    SOL_BRIDGE_ADDRESS,
    SOL_TOKEN_BRIDGE_ADDRESS,
    payerAddress,
    signedVAA
  );
  const signed = await wallet.signTransaction(transaction);
  const txid = await connection.sendRawTransaction(signed.serialize());
  await connection.confirmTransaction(txid);

// Submit transaction - results in a Wormhole message being published
const receipt = await transferFromEth(
    ETH_TOKEN_BRIDGE_ADDRESS,
    signer,
    tokenAddress,
    amount,
    CHAIN_ID_SOLANA,
    recipientAddress
  );
  // Get the sequence number and emitter address required to fetch the signedVAA of our message
  const sequence = parseSequenceFromLogEth(receipt, ETH_BRIDGE_ADDRESS);
  const emitterAddress = getEmitterAddressEth(ETH_TOKEN_BRIDGE_ADDRESS);
  // Fetch the signedVAA from the Wormhole Network (this may require retries while you wait for confirmation)
  const { signedVAA } = await getSignedVAA(
    WORMHOLE_RPC_HOST,
    CHAIN_ID_ETH,
    emitterAddress,
    sequence
  );
  // On Solana, we have to post the signedVAA ourselves
  await postVaaSolana(
    connection,
    wallet,
    SOL_BRIDGE_ADDRESS,
    payerAddress,
    signedVAA
  );
  // Finally, redeem on Solana
  const transaction = await redeemOnSolana(
    connection,
    SOL_BRIDGE_ADDRESS,
    SOL_TOKEN_BRIDGE_ADDRESS,
    payerAddress,
    signedVAA,
    isSolanaNative,
    mintAddress
  );
  const signed = await wallet.signTransaction(transaction);
  const txid = await connection.sendRawTransaction(signed.serialize());
  await connection.confirmTransaction(txid);
