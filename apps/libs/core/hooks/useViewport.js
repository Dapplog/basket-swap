import { useEffect, useState } from 'react';
import breakpoints from 'design/theme/breakpoints/breakpoints';

export const useViewport = () => {
  const br = () => ({
    mobile: window.innerWidth < breakpoints.tablet,
    tablet:
      window.innerWidth >= breakpoints.tablet &&
      window.innerWidth < breakpoints.desktop,
    desktop: window.innerWidth >= breakpoints.desktop,
  });
  const initial = br();
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [mobile, setMobile] = useState(initial.mobile);
  const [tablet, setTablet] = useState(initial.tablet);
  const [desktop, setDesktop] = useState(initial.desktop);

  useEffect(() => {
    const handleWindowResize = () => {
      const next_width = window.innerWidth;
      const next_height = window.innerHeight;
      setWidth(next_width);
      setHeight(next_height);
      const update = br();
      if (update.mobile) {
        setMobile(true);
        setTablet(false);
        setDesktop(false);
      } else if (update.tablet) {
        setMobile(false);
        setTablet(true);
        setDesktop(false);
      } else if (update.desktop) {
        setMobile(false);
        setTablet(false);
        setDesktop(true);
      }
    };
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  // Return the width so we can use it in our components
  return { width, height, mobile, tablet, desktop };
};
