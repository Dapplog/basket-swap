import React, { useMemo, useState } from 'react';
import { domMax, LazyMotion } from 'framer-motion';
import { useKeys } from 'core/hooks/useKeys';
import { useBubble } from 'core/hooks/remix/useBubble';
import { VIEW_POSITION, VIEW_WALLET } from 'core/remix/state/bubbles';
import { withTheme } from 'styled-components';
import { useSharedRef } from 'core/hooks/remix/useSharedRef';
import { SWAP_LAYERS_REF } from 'core/remix/state/refs';

export const AnimateView = withTheme(({ theme, children, ...props }) => {
  const key = useKeys(2);
  const [view, setView] = useBubble(VIEW_POSITION);
  const bottom = view === VIEW_WALLET;
  const [perspective, setPerspective] = useState(600);
  const [transition, setTransition] = useState({
    delay: 0.2,
    duration: 0.4,
  });
  const info = useSharedRef(SWAP_LAYERS_REF);
  const net_height = info?.height || 0;
  const top = 54;

  const style = {
    minHeight: `${net_height - top}px`,
    height: `${net_height - top}px`,
  };

  const boxShadow = `inset 0 0 0 2px ${theme.ribbon.background['primary']},
  inset 0 0 120px 0 rgba(0, 0, 0, 0.12),
  8px 8px 32px 4px rgba(0, 0, 0, ${bottom ? 0.06 : 0.16})`;

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

  const watch = [theme, children, view, bottom, variants, transition, top];
  const childrenWithProps = useMemo(
    () =>
      children &&
      React.Children.map(children, (child) =>
        React.cloneElement(child, {
          initial: 'initial',
          transformTemplate,
          animate: bottom ? 'bottom' : 'animate',
          variants,
          onAnimationComplete: () => {
            setPerspective(1000);
            setTransition({
              ...transition,
              delay: 0.05,
              duration: 0.36,
              type: 'spring',
              bounce: 0,
            });
          },
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
