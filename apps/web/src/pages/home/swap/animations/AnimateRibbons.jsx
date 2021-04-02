import React, { useState, useMemo } from 'react';
import { domMax, LazyMotion } from 'framer-motion';
import { useKeys } from 'core/hooks/useKeys';
import { useBubble } from 'core/hooks/remix/useBubble';
import {
  REVIEW_ACTIVE,
  SWAP_BASKET_ACTIVE,
  WALLET_ACTIVE,
} from 'core/remix/state/bubbles';
import { withTheme } from 'styled-components';

export const AnimateRibbons = withTheme(
  ({ theme, left, right, children, ...props }) => {
    const key = useKeys();
    const [active] = useBubble(SWAP_BASKET_ACTIVE);
    const [walletActive] = useBubble(WALLET_ACTIVE);
    const [reviewActive] = useBubble(REVIEW_ACTIVE);

    const transition = {
      duration: 0.3,
      type: 'tween',
      x: {
        type: 'tween',
        stiffness: 100,
        delay: 0,
        duration: 0.2,
      },
    };

    const variants = {
      initial: {
        opacity: 1,
        x: '0%',
        y: '0%',
        rotateX: '0deg',
        rotateY: '0deg',
        translateY: '0px',
        translateZ: '0px',
      },
      animate: {
        opacity: 1,
        x: '0%',
        y: '0%',
        rotateX: '0deg',
        rotateY: '0deg',
        translateY: left ? '8px' : right ? '-72px' : '0px',
        translateZ: '0px',
        transition,
      },
      bottom: {
        opacity: 1,
        x: left ? '-14%' : '14%',
        y: '0%',
        rotateX: '0deg',
        rotateY: '0deg',
        translateY: left ? '-24px' : right ? '-434px' : '0px',
        translateZ: '0px',
        transition,
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
            animate: walletActive || reviewActive ? 'bottom' : 'animate',
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
  },
);
