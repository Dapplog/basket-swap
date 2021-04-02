import React, { useMemo } from 'react';
import { domMax, LazyMotion } from 'framer-motion';
import { useKeys } from 'core/hooks/useKeys';
import { useBubble } from 'core/hooks/remix/useBubble';
import {
  VIEW_POSITION,
  VIEW_WALLET,
  WALLET_ACTIVE,
} from 'core/remix/state/bubbles';
import { withTheme } from 'styled-components';

export const AnimateConnect = withTheme(({ theme, children, ...props }) => {
  const key = useKeys(2);
  const [view] = useBubble(VIEW_POSITION);
  const active = view === VIEW_WALLET;

  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: active ? 1 : 0,
      transition: { duration: 0.25 },
    },
  };

  const watch = [children, active];
  const childrenWithProps = useMemo(
    () =>
      children &&
      React.Children.map(children, (child) =>
        React.cloneElement(child, {
          initial: 'initial',
          animate: 'animate',
          variants,
          props,
          ...key[0],
        }),
      ),
    watch,
  );

  return useMemo(
    () => (
      <LazyMotion {...key[1]} features={domMax}>
        {childrenWithProps}
      </LazyMotion>
    ),
    [childrenWithProps],
  );
});
