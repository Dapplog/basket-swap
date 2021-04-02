import remix from 'core/remix';
import { useState, useEffect } from 'react';

export const useRemix = (bubble_id, initial_value) => {
  const [state, setState] = useState({
    value: initial_value,
    setValue: () => {},
  });

  const updateRemix = (next_value) => {
    const nextState = {
      ...state,
      value: next_value,
      setValue: updateRemix,
    };
    setState(nextState);
    remix.addBubble(bubble_id, nextState);
  };

  useEffect(() => {
    updateRemix(initial_value);

    return remix.removeBubble(bubble_id);
  }, []);

  return [state.value, updateRemix];
};
