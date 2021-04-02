import React, { useState, useMemo } from 'react';
import { domMax, LazyMotion } from 'framer-motion';
import { useKeys } from 'core/hooks/useKeys';
import { withTheme } from 'styled-components';
import chroma from 'chroma-js';
import { useBubble } from 'core/hooks/remix/useBubble';
import { WALLET_ACTIVE } from 'core/remix/state/bubbles';

export const AnimateViewWallet = withTheme(({ children, theme }) => {
  const key = useKeys();
  const [walletActive] = useBubble(WALLET_ACTIVE);

  const [transition, setTransition] = useState({
    delay: 1.25,
    type: 'spring',
    duration: 0.8,
  });

  const transformTemplate = (transform_props, transform_string) =>
    `perspective(${1000}px) ${transform_string}`;

  const times = [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1];
  const x = [
    '0px',
    '-1px',
    '-3px',
    '3px',
    '1px',
    '-1px',
    '-3px',
    '3px',
    '-1px',
    '1px',
    '0px',
  ];
  const y = [
    '0px',
    '-2px',
    '0px',
    '2px',
    '-1px',
    '2px',
    '1px',
    '1px',
    '-1px',
    '2px',
    '0px',
  ];
  const rotate = [
    '0deg',
    '-1deg',
    '1deg',
    '0deg',
    '1deg',
    '-1deg',
    '0deg',
    '-1deg',
    '1deg',
    '0deg',
    '0deg',
  ];

  const variants = {
    initial: {
      opacity: 0,
      scale: 1,
    },
    animate: {
      transition,
      opacity: 1,
      x,
      y,
      rotate,
      scale: 1,
    },
    hover: {
      transition: { ...transition, repeat: Infinity, duration: 0.8 },
      x,
      y,
      rotate,
      scale: 1,
    },
    tap: {
      transition: {
        ...transition,
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 0.4,
      },
      x,
      y,
      rotate,
      scale: 1,
    },
    hidden: {
      transition,
      opacity: 1,
      x,
      y,
      rotate,
      scale: 0,
    },
  };

  const watch = [children, transition];
  const childrenWithProps = useMemo(
    () =>
      children &&
      React.Children.map(children, (child) =>
        React.cloneElement(child, {
          key: key[0],
          initial: 'initial',
          animate: walletActive ? 'hidden' : 'animate',
          whileHover: walletActive ? 'hidden' : 'hover',
          whileTap: 'tap',
          transformTemplate,
          onAnimationComplete: () => {
            setTransition({ ...transition, delay: 0, duration: 0.4, times });
          },
          variants,
        }),
      ),
    watch,
  );

  return <LazyMotion features={domMax}>{childrenWithProps}</LazyMotion>;
});
