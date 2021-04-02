import React from 'react';
import { withTheme } from 'styled-components';
import { domMax, LazyMotion } from 'framer-motion';
import { useKeys } from 'core/hooks/useKeys';

const AnimateBackground = ({ children, theme }) => {
  const key = useKeys();
  const variants = {
    initial: {
      background: 'rgba(0,0,0,0)',
    },
    animate: {
      transition: { duration: 0.25 },
      background: theme.background['dimmer'],
    },
  };

  const childrenWithProps =
    children &&
    React.Children.map(children, (child) =>
      React.cloneElement(child, {
        key: key[0],
        initial: 'initial',
        animate: 'animate',
        variants,
      }),
    );

  return <LazyMotion features={domMax}>{childrenWithProps}</LazyMotion>;
};

export default withTheme(AnimateBackground);
