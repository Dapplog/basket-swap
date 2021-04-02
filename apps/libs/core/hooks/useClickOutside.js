import { useEventListener } from './useEventListener';

export const useClickOutside = (ref, handler) => {
  const listener = (event) => {
    if (!ref.current || ref.current.contains(event.target)) {
      return;
    }
    handler(event);
  };

  useEventListener('mouseup', listener, document);
  useEventListener('touchstart', listener, document);
};
