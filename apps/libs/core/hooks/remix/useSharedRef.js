import remix from 'core/remix';
import { useState } from 'react';
import { less } from 'core/utils/helpers';

export const useSharedRef = (ref_id) => {
  const [info, setInfo] = useState();

  remix?.refs?.subscribe((next_refs) => {
    const next_info = next_refs?.get(ref_id);
    if (
      JSON.stringify(less(info, 'remix_ref')) !==
      JSON.stringify(less(next_info, 'remix_ref'))
    ) {
      setInfo({ ...next_info });
    }
  });

  return info;
};
