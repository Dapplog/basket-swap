import React, { useState, useMemo } from 'react';
import { domMax, LazyMotion, useMotionValue } from 'framer-motion';
import { useKeys } from 'core/hooks/useKeys';
import { useBubble } from 'core/hooks/remix/useBubble';
import {
  ANIMATING_TRADE,
  REVIEW_ACTIVE,
  SWAP_BASKET_ACTIVE,
  WALLET_ACTIVE,
} from 'core/remix/state/bubbles';
import { withTheme } from 'styled-components';

export const AnimateViewSwap = withTheme(({ theme, children, ...props }) => {
  const key = useKeys();
  const [active] = useBubble(SWAP_BASKET_ACTIVE);
  const [walletActive] = useBubble(WALLET_ACTIVE);
  const [reviewActive] = useBubble(REVIEW_ACTIVE);
  const [perspective, setPerspective] = useState(600);
  const [transition, setTransition] = useState({
    delay: 0.6,
    type: 'spring',
    duration: 0.8,
    bounce: 0.4,
  });

  const boxShadow = `inset 0 0 16px 0 rgba(255, 255, 255, 0.12),
    1px 1px 12px 2px rgba(0, 0, 0, ${walletActive ? 0.06 : 0.16})`;

  const style = {
    overflow: walletActive || reviewActive ? 'hidden' : 'visible',
  };

  const transformTemplate = (transform_props, transform_string) =>
    `perspective(${perspective}px) ${transform_string}`;

  const variants = {
    initial: {
      opacity: 0,
      transition,
      x: '0%',
      y: '0%',
      rotateX: '10deg',
      rotateY: '0deg',
      translateY: '200px',
      translateZ: '0px',
      boxShadow,
      borderRadius: walletActive
        ? theme.border_radius['rounder_outside']
        : theme.border_radius['roundest_inside'],
    },
    animate: {
      opacity: 1,
      transition,
      x: '0%',
      y: '0%',
      rotateX: '0deg',
      rotateY: '0deg',
      translateY: '0px',
      translateZ: '0px',
      boxShadow,
      borderRadius: walletActive
        ? theme.border_radius['rounder_outside']
        : theme.border_radius['roundest_inside'],
    },
    left: {
      opacity: 1,
      transition,
      x: '80%',
      y: '0%',
      rotateX: '0deg',
      rotateY: '-45deg',
      translateY: '0px',
      translateZ: '-320px',
      boxShadow,
      borderRadius: theme.border_radius['roundest_inside'],
    },
    right: {
      opacity: 1,
      transition,
      x: '-80%',
      y: '0%',
      rotateX: '0deg',
      rotateY: '45deg',
      translateY: '0px',
      translateZ: '-320px',
      boxShadow,
      borderRadius: theme.border_radius['roundest_inside'],
    },
    bottom: {
      opacity: 1,
      transition,
      x: '0%',
      y: '100%',
      rotateX: '0deg',
      rotateY: '0deg',
      translateY: '-148px',
      translateZ: '0px',
      boxShadow,
      borderRadius: walletActive
        ? theme.border_radius['rounder_outside']
        : theme.border_radius['roundest_inside'],
    },
  };

  const watch = [children, active, walletActive];
  const childrenWithProps = useMemo(
    () =>
      children &&
      React.Children.map(children, (child) =>
        React.cloneElement(child, {
          key: key[0],
          initial: 'initial',
          transformTemplate,
          onAnimationComplete: () => {
            setPerspective(1000);
            setTransition({
              ...transition,
              delay: 0,
              duration: 0.6,
              bounce: 0.25,
            });
          },
          animate: walletActive ? 'bottom' : active || 'animate',
          variants,
          style,
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
