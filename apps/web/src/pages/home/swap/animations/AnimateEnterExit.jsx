import React, { useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useKeys } from 'core/hooks/useKeys';

export const AnimateEnterExit = ({ children }) => {
  const key = useKeys(2);

  const watch = [children];
  const childrenWithProps = useMemo(
    () =>
      children &&
      React.Children.map(
        children,
        (child) => child && React.cloneElement(child, child),
      ),
    watch,
  );

  return useMemo(
    () => (
      <AnimatePresence {...key[1]} exitBeforeEnter>
        {childrenWithProps}
      </AnimatePresence>
    ),
    [childrenWithProps],
  );
};
