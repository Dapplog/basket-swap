import React from 'react';
import { useRemix } from 'core/hooks/remix/useRemix';
import { POPOVER_ACTIVE, POPOVER_REF } from 'core/remix/state/bubbles';
import { _popover } from '../Popover.styled';
import { useSharedRef } from 'core/hooks/remix/useSharedRef';
import { useClickOutside } from 'core/hooks/useClickOutside';
import { useRemixRef } from 'core/hooks/remix/useRemixRef';

const PopoverProvider = () => {
  const [ref] = useRemixRef(POPOVER_REF);
  const [popover, setPopover] = useRemix(POPOVER_ACTIVE, {
    active: '',
    children: null,
    isOpen: false,
  });
  const info = useSharedRef(popover?.active);
  const left = info?.left;
  const top = info?.top;
  const children = popover?.children;
  const isOpen = popover?.isOpen;

  console.log('POOPOVERRRR', popover);
  console.log('POOPOVERRRR_INFO', info);

  return (
    isOpen && (
      <_popover ref={ref} $left={left} $top={top}>
        {children}
      </_popover>
    )
  );
};

export default PopoverProvider;
