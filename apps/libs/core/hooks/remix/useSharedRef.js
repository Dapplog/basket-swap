import remix from 'core/remix';
import { useState, useEffect } from 'react';
import usePrevious from '../usePrevious';

export const useSharedRef = (ref_id) => {
  const [info, setInfo] = useState({
    height: undefined,
    width: undefined,
    x: undefined,
    y: undefined,
  });

  const [subject, setSubject] = useState();
  const prev_subject = usePrevious(subject);

  // Listen for subject mounting/unmounting
  useEffect(() => {
    remix.refs.subscribe((next_refs) => {
      const next_subject = next_refs?.get(ref_id);
      if (!subject && next_subject) {
        setSubject(next_subject);
      }
    });
    return remix.refs.unsubscribe;
  }, []);

  // subscribe to ref
  useEffect(() => {
    if (!prev_subject && subject) {
      subject.subscribe((next_info) => {
        if (
          (next_info && info.height !== next_info?.height) ||
          info.width !== next_info?.width ||
          info.x !== next_info?.x ||
          info.y !== next_info?.y
        ) {
          setInfo({ ...next_info });
        }
      });
      return subject.unsubscribe;
    }
  }, [subject]);
  return info;
};
