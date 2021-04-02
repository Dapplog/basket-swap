import { useEffect, useRef } from 'react';
import { isEqual } from 'lodash';

export const useDeepEffect = (effectFunc, deps) => {
  // 1st Step
  const isFirst = useRef(true);
  const prevDeps = useRef(deps);

  useEffect(() => {
    // 2nd Step
    const isSame = prevDeps.current.every((obj, index) =>
      isEqual(obj, deps[index]),
    );

    // 3rd Step
    if (isFirst.current || !isSame) {
      effectFunc();
    }

    // 4th Step
    isFirst.current = false;
    prevDeps.current = deps;
  }, deps);
};
