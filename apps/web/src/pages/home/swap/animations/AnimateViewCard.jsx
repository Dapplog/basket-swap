import React, { useState } from 'react';
import { domMax, LazyMotion } from 'framer-motion';
import { useKeys } from 'core/hooks/useKeys';

export const AnimateViewCard = ({ children }) => {
  const key = useKeys();
  const transformTemplate = (transform_props, transform_string) =>
    `perspective(${1000}px) ${transform_string}`;

  const variants = {
    initial: {
      opacity: 0,
      translateZ: '-2000px',
    },
    animate: {
      opacity: 1,
      translateZ: '0px',
      transition: { type: 'spring', duration: 0.4, bounce: 0 },
    },
  };

  const childrenWithProps =
    children &&
    React.Children.map(children, (child) =>
      React.cloneElement(child, {
        key: key[0],
        initial: 'initial',
        transformTemplate,
        animate: 'animate',
        variants,
      }),
    );

  return <LazyMotion features={domMax}>{childrenWithProps}</LazyMotion>;
};
