import React, { useMemo } from 'react';
import { useSharedRef } from 'core/hooks/remix/useSharedRef';
import { AnimateProxy } from '../animations/AnimateProxy';
import { useRemix } from 'core/hooks/remix/useRemix';
import { PROXY_LIST } from 'core/remix/state/bubbles';

const ProxyProvider = () => {
  const [proxies, setProxies] = useRemix(PROXY_LIST, new Map());

  const list = useMemo(() => proxies?.entries?.map(), [proxies]);

  // list out the proxies and when they are active

  return (
    <AnimateProxy>
      <_proxy />
    </AnimateProxy>
  );
};

export default ProxyProvider;
