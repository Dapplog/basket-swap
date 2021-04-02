import remix from 'core/remix';
import { useState, useEffect } from 'react';
import usePrevious from '../usePrevious';

export const useRemix = (bubble_id, initial_value) => {
  const [state, setState] = useState({
    value: initial_value,
    setValue: undefined,
  });

  const [subject, setSubject] = useState(null);
  const prev_subject = usePrevious(subject);

  const updateRemix = (next_value) => {
    const nextState = {
      ...state,
      value: next_value,
      setValue: updateRemix,
    };
    setState(nextState);
    const next_subject = remix.addBubble(bubble_id, nextState);
    if (next_subject) {
      setSubject(next_subject);
    }
  };

  // subscribe to ref
  useEffect(() => {
    if (!prev_subject && subject) {
      subject.subscribe((next_state) => {
        setState({
          ...next_state,
          value: next_state.value,
          setValue: next_state.setValue,
        });
      });
      return subject.unsubscribe;
    }
  }, [subject]);

  useEffect(() => {
    updateRemix(initial_value);
  }, []);

  return [state.value, updateRemix];
};
