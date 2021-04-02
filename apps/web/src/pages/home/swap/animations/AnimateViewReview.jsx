import React, { useMemo, useState } from 'react';
import { domMax, LazyMotion } from 'framer-motion';
import { useKeys } from 'core/hooks/useKeys';
import { useBubble } from 'core/hooks/remix/useBubble';
import {
  VIEW_BASKET_LEFT,
  VIEW_BASKET_RIGHT,
  VIEW_POSITION,
  VIEW_REVIEW,
} from 'core/remix/state/bubbles';
import { useSharedRef } from 'core/hooks/remix/useSharedRef';
import { SWAP_LAYERS_REF } from 'core/remix/state/refs';
import { withTheme } from 'styled-components';

export const AnimateViewReview = withTheme(({ theme, children, ...props }) => {
  const key = useKeys(2);
  const [view] = useBubble(VIEW_POSITION);
  const review_active = view === VIEW_REVIEW;
  const basket_left = view === VIEW_BASKET_LEFT;
  const basket_right = view === VIEW_BASKET_RIGHT;
  const info = useSharedRef(SWAP_LAYERS_REF);
  const net_height = info?.height || 0;

  const top = !review_active ? `${net_height - 80}px` : '124px';
  const review_height = !review_active ? `80px` : `${net_height - 124}px`;
  const style = {
    top,
    height: review_height,
    minHeight: review_height,
  };

  const [perspective, setPerspective] = useState(600);
  const [transition, setTransition] = useState({
    delay: 0.6,
    type: 'spring',
    duration: 1,
    bounce: 0.4,
  });
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
    },
    left: {
      opacity: 1,
      transition,
      x: '76%',
      y: '-50%',
      rotateX: '-10deg',
      rotateY: '-45deg',
      translateY: '0px',
      translateZ: '-320px',
    },
    right: {
      opacity: 1,
      transition,
      x: '-76%',
      y: '-50%',
      rotateX: '-10deg',
      rotateY: '45deg',
      translateY: '0px',
      translateZ: '-320px',
    },
  };

  const watch = [
    theme,
    children,
    basket_left,
    basket_right,
    review_active,
    top,
    net_height,
    review_height,
    transition,
  ];
  const childrenWithProps = useMemo(
    () =>
      children &&
      React.Children.map(children, (child) =>
        React.cloneElement(child, {
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
          animate:
            (basket_left && 'left') || (basket_right && 'right') || 'animate',
          style,
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
