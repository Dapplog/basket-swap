import remix from 'core/remix';
import { useState } from 'react';
import { less } from '../../utils/helpers';

export const useBubble = (bubble_id) => {
  const [bubble, setBubble] = useState({
    value: undefined,
    setValue: undefined,
  });

  remix?.bubbles?.subscribe((next_state) => {
    const next_bubble = next_state?.get(bubble_id);
    if (
      JSON.stringify(less(bubble, 'setValue')) !==
      JSON.stringify(less(next_bubble, 'setValue'))
    ) {
      setBubble({
        ...next_bubble,
        value: next_bubble.value,
        setValue: next_bubble.setValue,
      });
    }
  });

  return [bubble.value, bubble.setValue];
};
