import React from 'react';
import { _proxy } from './Proxy.styled';
import { useSharedRef } from 'core/hooks/remix/useSharedRef';
import { PROXY_LIST } from 'core/remix/state/bubbles';
import { useBubble } from 'core/hooks/remix/useBubble';

export const Proxy = ({ ref_id, active }) => {
  const [proxies, setProxies] = useBubble(PROXY_LIST);

  return null;
};

export default Proxy;
