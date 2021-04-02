import React, { useMemo } from 'react';
import { domMax, LazyMotion } from 'framer-motion';
import { useKeys } from 'core/hooks/useKeys';
import { useBubble } from 'core/hooks/remix/useBubble';
import { PROXY_CONNECT_WALLET } from 'core/remix/state/bubbles';
import { withTheme } from 'styled-components';

export const AnimateProxy = withTheme(({ theme, children, ...props }) => {
  const key = useKeys(2);
  const [view] = useBubble(PROXY_CONNECT_WALLET);

  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: active ? 1 : 0,
      transition: { duration: 0.25 },
    },
  };

  const watch = [children];
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
