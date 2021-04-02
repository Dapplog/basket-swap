import { useEffect, useState } from 'react';
import SerumAPI from '../../api/serum/serum.api';
import HarmonyAPI from '../../api/harmony/harmony.api';
import OneInchAPI from '../../api/1inch/oneinch.api';

export const useTokenList = (category) => {
  const [tokenList, setTokenList] = useState();

  useEffect(() => {
    // console.log('MARKETS', MARKETS);
    // console.log('TOKEN_MINTS', TOKEN_MINTS);
    if (category === 'CATEGORY_ONE_INCH')
      OneInchAPI()
        .getTokens()
        .then((res) => setTokenList(res));
    if (category === 'CATERGORY_HARMONY')
      HarmonyAPI()
        .getTokens()
        .then((res) => setTokenList(res));
    if (category === 'CATEGORY_SERUM')
      SerumAPI()
        .getTokens()
        .then((res) => setTokenList(res));
  }, []);

  return {
    tokenList,
  };
};
