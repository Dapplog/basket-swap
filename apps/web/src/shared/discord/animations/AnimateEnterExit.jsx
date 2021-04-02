import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useKeys } from 'core/hooks/useKeys';

export const AnimateEnterExit = ({ children }) => {
  const key = useKeys();
  const childrenWithProps =
    children &&
    React.Children.map(
      children,
      (child) =>
        child &&
        React.cloneElement(child, {
          key: key[0],
        }),
    );
  return <AnimatePresence exitBeforeEnter>{childrenWithProps}</AnimatePresence>;
};
