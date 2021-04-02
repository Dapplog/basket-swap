import remix from 'core/remix';
import { useCallback, useState, useLayoutEffect } from 'react';
import { isEmpty } from 'lodash';

export const useRemixRef = (ref_id) => {
  const [info, setInfo] = useState({});

  const updateRemix = (next_info) => {
    remix.addRef(ref_id, next_info);
    setInfo(next_info);
  };

  const updateInfo = (remix_ref) => {
    const rect = remix_ref?.getBoundingClientRect();
    const has_info = {
      width: remix_ref?.clientWidth || 0,
      height: remix_ref?.clientHeight || 0,
      x: rect?.x || 0,
      y: rect?.y || 0,
    };

    if (!isEmpty(has_info)) {
      updateRemix({
        ...has_info,
        remix_ref,
      });
    }
  };

  const ref = useCallback((remix_ref) => {
    updateInfo(remix_ref);
  }, []);

  useLayoutEffect(() => {
    return remix.removeRef(ref_id);
  }, []);

  return [ref, info];
};
