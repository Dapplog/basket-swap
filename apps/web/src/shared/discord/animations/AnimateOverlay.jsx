import React, { useState } from 'react';
import { domMax, LazyMotion } from 'framer-motion';
import { useKeys } from 'core/hooks/useKeys';

export const AnimateOverlay = ({ children }) => {
  const key = useKeys();
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      transition: { duration: 0.4 },
      opacity: 0.24,
    },
    exit: {
      transition: { duration: 0.4 },
      opacity: 0,
    },
  };

  const childrenWithProps =
    children &&
    React.Children.map(children, (child) =>
      React.cloneElement(child, {
        ...child.props,
        key: key[0],
        initial: 'initial',
        animate: 'animate',
        exit: 'exit',
        variants,
      }),
    );

  return <LazyMotion features={domMax}>{childrenWithProps}</LazyMotion>;
};
