import React, { useMemo, useState } from 'react';
import { domMax, LazyMotion } from 'framer-motion';
import { useKeys } from 'core/hooks/useKeys';
import { useBubble } from 'core/hooks/remix/useBubble';
import { WALLET_ACTIVE } from 'core/remix/state/bubbles';
import { withTheme } from 'styled-components';

export const AnimateBasketMaker = withTheme(({ theme, children, ...props }) => {
  const key = useKeys();
  const [walletActive] = useBubble(WALLET_ACTIVE);
  const [perspective, setPerspective] = useState(600);
  const [transition, setTransition] = useState({
    delay: 0.2,
    duration: 0.4,
  });

  const boxShadow = `inset 0 0 0 2px ${theme.ribbon.background['primary']},
  inset 0 0 120px 0 rgba(0, 0, 0, 0.12),
  8px 8px 32px 4px rgba(0, 0, 0, ${walletActive ? 0.06 : 0.16})`;

  const transformTemplate = (transform_props, transform_string) =>
    `perspective(${perspective}px) ${transform_string}`;

  const variants = {
    initial: {
      opacity: 0,
      x: '0%',
      y: '50%',
      translateY: '0px',
      boxShadow,
    },
    animate: {
      opacity: 1,
      x: '0%',
      y: '0%',
      translateY: '0px',
      transition,
      boxShadow,
    },
    bottom: {
      opacity: 1,
      transition,
      x: '0%',
      y: '100%',
      translateY: '-148px',
      boxShadow,
    },
  };

  const watch = [walletActive];
  const childrenWithProps = useMemo(
    () =>
      children &&
      React.Children.map(children, (child) =>
        React.cloneElement(child, {
          key: key[0],
          initial: 'initial',
          transformTemplate,
          animate: walletActive ? 'bottom' : 'animate',
          variants,
          onAnimationComplete: () => {
            setTransition({
              ...transition,
              delay: 0.05,
              duration: 0.36,
              type: 'spring',
              bounce: 0,
            });
          },
          props,
        }),
      ),
    watch,
  );

  return <LazyMotion features={domMax}>{childrenWithProps}</LazyMotion>;
});
