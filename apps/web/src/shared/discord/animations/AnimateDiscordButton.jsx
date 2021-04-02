import React, { useState } from 'react';
import { LazyMotion, domMax } from 'framer-motion';
import { useKeys } from 'core/hooks/useKeys';

export const AnimateDiscordButton = ({ children }) => {
  const key = useKeys();
  const [transition, setTransition] = useState({
    delay: 1.5,
    type: 'spring',
    duration: 1.4,
    bounce: 0.8,
  });

  const variants = {
    initial: {
      y: '100%',
      scale: 0,
    },
    animate: {
      transition,
      y: '0%',
      scale: 1,
    },
    hover: {
      transition: { ...transition, delay: 0, type: 'tween', duration: 0.1 },
      scale: 1.2,
    },
    tap: {
      transition: { ...transition, delay: 0, type: 'tween', duration: 0.1 },
      scale: 0.9,
    },
  };

  const childrenWithProps =
    children &&
    React.Children.map(children, (child) =>
      React.cloneElement(child, {
        key: key[0],
        initial: 'initial',
        animate: 'animate',
        whileHover: 'hover',
        whileTap: 'tap',
        onAnimationComplete: () =>
          setTransition({
            ...transition,
            delay: 0,
            type: 'tween',
            duration: 0.1,
          }),
        variants,
      }),
    );

  return <LazyMotion features={domMax}>{childrenWithProps}</LazyMotion>;
};
