import React, { useMemo } from 'react';
import { _layers } from './Layers.styled';
import { useSharedRef } from 'core/hooks/useSharedRef';

export const Layers = ({ children, ...props }) => {
  const childrenWithProps = useMemo(
    () =>
      children &&
      React.Children.map(children, (child) =>
        React.cloneElement(child, {
          // width,
          // height,
          // x,
          // y,
          // scroll
        }),
      ),
    [children],
  );

  return <_layers {...props}>{childrenWithProps}</_layers>;
};

export default Layers;
