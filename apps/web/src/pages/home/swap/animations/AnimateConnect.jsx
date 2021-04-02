import React, { useMemo } from 'react';
import { domMax, LazyMotion } from 'framer-motion';
import { useKeys } from 'core/hooks/useKeys';
import { useBubble } from 'core/hooks/remix/useBubble';
import { WALLET_ACTIVE } from 'core/remix/state/bubbles';
import { withTheme } from 'styled-components';

export const AnimateConnect = withTheme(({ theme, children, ...props }) => {
  const key = useKeys();
  const [walletActive] = useBubble(WALLET_ACTIVE);

  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: walletActive ? 1 : 0,
      transition: { duration: 0.25 },
    },
  };

  const watch = [children, walletActive];
  const childrenWithProps = useMemo(
    () =>
      children &&
      React.Children.map(children, (child) =>
        React.cloneElement(child, {
          key: key[0],
          initial: 'initial',
          animate: 'animate',
          variants,
          props,
        }),
      ),
    watch,
  );

  return (
    <LazyMotion key={`lazy-${key}`} features={domMax}>
      {childrenWithProps}
    </LazyMotion>
  );
});
