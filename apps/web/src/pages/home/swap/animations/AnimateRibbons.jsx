import React, { useMemo } from 'react';
import { domMax, LazyMotion } from 'framer-motion';
import { useKeys } from 'core/hooks/useKeys';
import { useBubble } from 'core/hooks/remix/useBubble';
import {
  VIEW_POSITION,
  VIEW_REVIEW,
  VIEW_WALLET,
} from 'core/remix/state/bubbles';
import { withTheme } from 'styled-components';

export const AnimateRibbons = withTheme(
  ({ theme, left, right, children, ...props }) => {
    const key = useKeys(2);
    const [view] = useBubble(VIEW_POSITION);
    const active = view === VIEW_WALLET || view === VIEW_REVIEW;

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

    const watch = [theme, children, active, variants];
    const childrenWithProps = useMemo(
      () =>
        children &&
        React.Children.map(children, (child) =>
          React.cloneElement(child, {
            initial: 'initial',
            animate: active ? 'bottom' : 'animate',
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
  },
);
