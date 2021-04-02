import React, { useMemo, useEffect } from 'react';
import { _popover } from './Popover.styled';
import { useSharedRef } from 'core/hooks/remix/useSharedRef';
import { POPOVER_ACTIVE, POPOVER_CHILDREN } from 'core/remix/state/bubbles';
import { useBubble } from 'core/hooks/remix/useBubble';
import { useKeys } from 'core/hooks/useKeys';

export const Popover = ({ children, ref_id }) => {
  const key = useKeys();
  const [popChild] = useBubble(POPOVER_CHILDREN);
  const [popover, setPopover = () => {}] = useBubble(POPOVER_ACTIVE);
  const isOpen = popChild?.isOpen;

  const watch = [isOpen, ref_id];
  const childrenWithProps = useMemo(
    () =>
      children &&
      React.Children.map(children, (child) =>
        React.cloneElement(child, {
          key: key[0],
        }),
      ),
    watch,
  );

  useEffect(() => {
    if (isOpen) {
      setPopover({
        active: ref_id,
        children: childrenWithProps,
        isOpen,
      });
    } else {
      setPopover({
        active: ref_id,
        children: childrenWithProps,
        isOpen: false,
      });
    }
  }, [popChild?.isOpen]);

  return null;
};
export default Popover;
