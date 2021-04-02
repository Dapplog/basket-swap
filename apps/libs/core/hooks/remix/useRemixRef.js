import remix from 'core/remix';
import { useCallback, useState, useLayoutEffect } from 'react';
import { useEventListener } from '../useEventListener';
import { isEmpty } from 'lodash';

export const useRemixRef = (ref_id) => {
  const [info, setInfo] = useState({});

  const updateRemix = (next_info) => {
    remix.addRef(ref_id, next_info);
    setInfo(next_info);
  };

  const updateInfo = (remix_ref) => {
    const ref_info = remix_ref?.getBoundingClientRect();
    const has_info = {
      width: remix_ref?.clientWidth,
      height: remix_ref?.clientHeight,
      x: ref_info?.x,
      y: ref_info?.y,
      top: remix_ref?.clientTop,
      left: remix_ref?.clientLeft,
    };

    if (!isEmpty(has_info)) {
      const { x, y, width, height, top, right, bottom, left } = has_info;
      const next_info = {
        ...info,
        x,
        y,
        width,
        height,
        top,
        right,
        bottom,
        left,
      };
      if (remix_ref) next_info.remix_ref = remix_ref;
      updateRemix(next_info);
    }
  };

  const ref = useCallback((remix_ref) => {
    updateInfo(remix_ref);
  }, []);

  useEventListener('resize', () => {
    updateInfo(info?.remix_ref);
  });

  useEventListener(
    'scroll',
    () => {
      updateInfo(info?.remix_ref);
    },
    info?.remix_ref || undefined,
  );

  useLayoutEffect(() => {
    return remix.removeRef(ref_id);
  }, []);

  return [ref, info];
};
