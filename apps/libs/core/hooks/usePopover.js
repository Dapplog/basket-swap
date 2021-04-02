import { POPOVER_CHILDREN } from '../remix/state/bubbles';
import { useRemix } from './remix/useRemix';

export const usePopover = (ref_id) => {
  const [popoverActive, setPopoverActive] = useRemix(POPOVER_CHILDREN, {
    isOpen: false,
    active: '',
  });

  const setIsOpen = (isOpen) => {
    setPopoverActive({
      isOpen,
      active: ref_id,
    });
  };

  return [popoverActive, setIsOpen];
};
