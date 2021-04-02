import React, { useState, useMemo } from 'react';
import { domMax, LazyMotion } from 'framer-motion';
import { useKeys } from 'core/hooks/useKeys';
import { withTheme } from 'styled-components';
import chroma from 'chroma-js';
import { useBubble } from 'core/hooks/remix/useBubble';
import {
  VIEW_POSITION,
  VIEW_WALLET,
  WALLET_ACTIVE,
} from 'core/remix/state/bubbles';

export const AnimateViewWallet = withTheme(({ children, ...props }) => {
  const key = useKeys(2);
  const [view] = useBubble(VIEW_POSITION);
  const wallet_active = view === VIEW_WALLET;

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

  const watch = [children, transition, variants, props];
  const childrenWithProps = useMemo(
    () =>
      children &&
      React.Children.map(children, (child) =>
        React.cloneElement(child, {
          initial: 'initial',
          animate: wallet_active ? 'hidden' : 'animate',
          whileHover: wallet_active ? 'hidden' : 'hover',
          whileTap: 'tap',
          transformTemplate,
          onAnimationComplete: () => {
            setTransition({ ...transition, delay: 0, duration: 0.4, times });
          },
          variants,
          ...key[0],
          props,
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
