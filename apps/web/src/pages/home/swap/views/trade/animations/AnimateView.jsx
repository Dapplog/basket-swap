import React, { useState, useMemo } from 'react';
import { domMax, LazyMotion } from 'framer-motion';
import { useKeys } from 'core/hooks/useKeys';
import { useBubble } from 'core/hooks/remix/useBubble';
import {
  ANIMATING_SWAP,
  VIEW_BASKET_LEFT,
  VIEW_BASKET_RIGHT,
  VIEW_POSITION,
  VIEW_REVIEW,
  VIEW_SWAP,
  VIEW_WALLET,
} from 'core/remix/state/bubbles';
import { withTheme } from 'styled-components';
import { useRemix } from 'core/hooks/remix/useRemix';
import usePrevious from 'core/hooks/usePrevious';

export const AnimateView = withTheme(({ theme, children, ...props }) => {
  const key = useKeys(2);
  const [animating, setAnimating] = useRemix(ANIMATING_SWAP, false);
  const [view] = useBubble(VIEW_POSITION);
  const prev_view = usePrevious(view);
  const basket_left = view === VIEW_BASKET_LEFT;
  const basket_right = view === VIEW_BASKET_RIGHT;
  const wallet_active = view === VIEW_WALLET;
  const review_active = view === VIEW_REVIEW;
  const [perspective, setPerspective] = useState(600);
  const [transition, setTransition] = useState({
    delay: 0.6,
    type: 'spring',
    duration: 0.8,
    bounce: 0.4,
  });

  const boxShadow = `inset 0 0 16px 0 rgba(255, 255, 255, 0.12),
    1px 1px 12px 2px rgba(0, 0, 0, ${wallet_active ? 0.06 : 0.16})`;

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
      borderRadius:
        wallet_active || review_active
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
      borderRadius:
        wallet_active || review_active
          ? theme.border_radius['rounder_outside']
          : theme.border_radius['roundest_inside'],
    },
    left: {
      opacity: 1,
      transition,
      x: '100%',
      y: '-8%',
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
      x: '-100%',
      y: '-8%',
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
      borderRadius:
        wallet_active || review_active
          ? theme.border_radius['rounder_outside']
          : theme.border_radius['roundest_inside'],
    },
  };

  const watch = [theme, children, view, transition];
  const childrenWithProps = useMemo(
    () =>
      children &&
      React.Children.map(children, (child) =>
        React.cloneElement(child, {
          initial: 'initial',
          transformTemplate,
          onAnimationStart: () => {
            if (prev_view === VIEW_WALLET && view === VIEW_SWAP)
              setAnimating(true);
          },
          onAnimationComplete: () => {
            setAnimating(false);
            setPerspective(1000);
            setTransition({
              ...transition,
              delay: 0,
              duration: 0.6,
              bounce: 0.25,
            });
          },
          animate:
            (basket_left && 'left') ||
            (basket_right && 'right') ||
            (wallet_active && 'bottom') ||
            'animate',
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
