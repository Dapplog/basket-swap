import React, {
useEffect,
useMemo,
useState, } from 'react';
// import Wallet from '@project-serum/sol-wallet-adapter';
   
export const WALLET_PROVIDERS = [
    {
      name: 'Cryptid',
      url: 'https://cryptid.identity.com',
      // icon: https://cryptid.identity.com/logo.svg,  // TODO
    }
  ]

export function WalletProvider({ children }) {
  console.log(" in Wallet Provider")
  const endpoint = 'https://api.mainnet-beta.solana.com'  // problem
  const [autoConnect, setAutoConnect] = useState(false);
  const providerUrl = 'https://cryptid.identity.com';

  const provider = useMemo(
    () => WALLET_PROVIDERS.find(({ url }) => url === providerUrl),
    [providerUrl ],
  );
    
  let [wallet, setWallet] = useState(undefined);
  
  // problem: provider.adapter
  useEffect(() => { 
    if (provider) {
      const updateWallet = () => {
        wallet = new (provider.adapter)(
          providerUrl,
          endpoint,
        );
        setWallet(wallet);
      };

      if (document.readyState !== 'complete') {
        // wait to ensure that browser extensions are loaded
        const listener = () => {
          updateWallet();
          window.removeEventListener('load', listener);
        };
        window.addEventListener('load', listener);
        return () => window.removeEventListener('load', listener);
      } else {
        updateWallet();
      }
    }
  }, [provider, providerUrl, endpoint]);

  const [connected, setConnected] = useState(false);
      

  useEffect(() => {
    if (wallet) {
      wallet.on('connect', () => {
        if (wallet?.publicKey) {
          console.log('connected');
          setConnected(true);
          const walletPublicKey = wallet.publicKey.toBase58();
          const keyToDisplay =
            walletPublicKey.length > 20
              ? `${walletPublicKey.substring(
                0,
                7,
              )}.....${walletPublicKey.substring(
                walletPublicKey.length - 7,
                walletPublicKey.length,
              )}`
              : walletPublicKey;

          console.log(walletPublicKey);
          // notify({
          //   message: 'Wallet update',
          //   description: 'Connected to wallet ' + keyToDisplay,
          // });
        }
      })
    }
  });
}