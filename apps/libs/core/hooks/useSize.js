import { useLayoutEffect, useState } from 'react';
import { isEqual } from 'lodash';
import usePrevious from './usePrevious';
import { useViewport } from './useViewport';

export const useSize = (ref) => {
  const { width, height } = useViewport();
  const [size, setSize] = useState({});
  const prev_ref = usePrevious(ref);

  useLayoutEffect(() => {
    setSize(ref.current.getBoundingClientRect());
  }, [isEqual(prev_ref, ref), width, height]);

  return {
    size,
  };
};
