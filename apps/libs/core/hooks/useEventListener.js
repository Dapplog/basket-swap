import { useLayoutEffect, useRef } from 'react';

export const useEventListener = (eventName, handler, element = window) => {
  const savedHandler = useRef();

  useLayoutEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useLayoutEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    const eventListener = (event) => savedHandler.current(event);

    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};
