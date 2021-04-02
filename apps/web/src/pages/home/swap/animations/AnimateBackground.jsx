import React, { useMemo } from 'react';
import { withTheme } from 'styled-components';
import { domMax, LazyMotion } from 'framer-motion';
import { useKeys } from 'core/hooks/useKeys';

export const AnimateBackground = withTheme(({ children, theme }) => {
  const key = useKeys(2);
  const variants = {
    initial: {
      background: 'rgba(0,0,0,0)',
    },
    animate: {
      transition: { duration: 0.25 },
      background: theme.background['dimmer'],
    },
  };

  const watch = [theme, children, variants];
  const childrenWithProps = useMemo(
    () =>
      children &&
      React.Children.map(children, (child) =>
        React.cloneElement(child, {
          initial: 'initial',
          animate: 'animate',
          variants,
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
