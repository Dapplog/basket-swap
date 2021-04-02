import React from 'react';
import { _proxy } from './Proxy.styled';
import { useSharedRef } from 'core/hooks/remix/useSharedRef';
import { less } from 'core/utils/helpers';

export const Proxy = ({ ref_id }) => {
  const shared_info = useSharedRef(ref_id);

  console.log(JSON.stringify(less(shared_info, 'remix_ref')));

  return <_proxy />;
};

export default Proxy;
