import { useState, useCallback } from 'react';

export const useStateRef = (processNode) => {
  const [node, setNode] = useState(null);
  const setRef = useCallback(
    (newNode) => {
      setNode(processNode(newNode));
    },
    [processNode],
  );
  return [node, setRef];
};
