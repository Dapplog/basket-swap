import React, { useMemo, useState } from 'react';
import { domMax, LazyMotion } from 'framer-motion';
import { useKeys } from 'core/hooks/useKeys';
import { useBubble } from 'core/hooks/remix/useBubble';
import { VIEW_POSITION, VIEW_WALLET } from 'core/remix/state/bubbles';
import { withTheme } from 'styled-components';
import { useSharedRef } from 'core/hooks/remix/useSharedRef';
import { SWAP_LAYERS_REF } from 'core/remix/state/refs';

export const AnimateMask = withTheme(({ theme, children, ...props }) => {
  const key = useKeys(2);
  const [view, setView] = useBubble(VIEW_POSITION);
  const wallet_active = view === VIEW_WALLET;
  const info = useSharedRef(SWAP_LAYERS_REF);
  const net_height = info?.height || 0;
  const top = 54;

  const style = {
    top,
    minHeight: `${net_height - top}px`,
    height: `${net_height - top}px`,
    maxHeight: `${net_height - top}px`,
    overflow: 'hidden',
  };

  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
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
          style,
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
