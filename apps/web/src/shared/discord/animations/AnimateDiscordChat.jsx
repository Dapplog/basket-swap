import React, { useState } from 'react';
import { domMax, LazyMotion } from 'framer-motion';
import { useKeys } from 'core/hooks/useKeys';

export const AnimateDiscordChat = ({ children }) => {
  const key = useKeys();
  const [transition, setTransition] = useState({
    type: 'spring',
    duration: 0.4,
    bounce: 0.25,
  });

  const variants = {
    initial: {
      opacity: 0,
      x: '100%',
    },
    animate: {
      transition,
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: '100%',
    },
  };

  const childrenWithProps =
    children &&
    React.Children.map(children, (child) =>
      React.cloneElement(child, {
        key: key[0],
        initial: 'initial',
        animate: 'animate',
        exit: 'exit',
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
