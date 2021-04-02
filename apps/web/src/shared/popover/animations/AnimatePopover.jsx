import React, { useState, useMemo } from 'react';
import { domMax, LazyMotion } from 'framer-motion';
import { useKeys } from 'core/hooks/useKeys';
import { useBubble } from 'core/hooks/remix/useBubble';
import { withTheme } from 'styled-components';

export const AnimateViewSwap = withTheme(({ theme, children, ...props }) => {
  const key = useKeys();
  const [transition, setTransition] = useState({
    delay: 0.6,
    type: 'spring',
    duration: 0.8,
    bounce: 0.4,
  });

  const variants = {
    initial: {
      scale: 0,
    },
    animate: {
      scale: 1,
    },
  };

  const watch = [transition];
  const childrenWithProps = useMemo(
    () =>
      children &&
      React.Children.map(children, (child) =>
        React.cloneElement(child, {
          key: key[0],
          initial: 'initial',
          onAnimationComplete: () => {
            setTransition({
              ...transition,
              delay: 0,
              duration: 0.6,
              bounce: 0.25,
            });
          },
          animate: 'animate',
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
});
