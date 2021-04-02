import React, { useMemo, useState } from 'react';
import { domMax, LazyMotion } from 'framer-motion';
import { useKeys } from 'core/hooks/useKeys';
import { useBubble } from 'core/hooks/remix/useBubble';
import {
  VIEW_BASKET_LEFT,
  VIEW_BASKET_RIGHT,
  VIEW_POSITION,
  VIEW_WALLET,
} from 'core/remix/state/bubbles';
import { withTheme } from 'styled-components';
import { useSharedRef } from 'core/hooks/remix/useSharedRef';
import { SWAP_LAYERS_REF } from 'core/remix/state/refs';

export const AnimateHeader = withTheme(({ theme, children, ...props }) => {
  const key = useKeys(2);
  const [view] = useBubble(VIEW_POSITION);
  const isLeft = view === VIEW_BASKET_LEFT;
  const isRight = view === VIEW_BASKET_RIGHT;

  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: isLeft ? '-16px' : isRight ? '16px' : 0,
    },
  };

  const watch = [theme, children, view];
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
