import { useEffect, useState } from 'react';
import checkIfPhantomWalletIsConnected from '../wallets/connect/connect.wallet';

const usePhantomConnect = () => {
    const [walletAddress, setWalletAddress] = useState(null);

    const getWalletAddress = walletAddress;

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
          setWalletAddress(response.publicKey.toString());
        }
      };
    
    useEffect(() => {
        const onLoad = async () => {
          log("\n\nUSING EFFECT\n\n")
          await checkIfWalletIsConnected();
        };
        window.addEventListener('load', onLoad);
        return () => window.removeEventListener('load', onLoad);
      }, []);
};

export default usePhantomConnect;
