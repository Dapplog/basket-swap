import React, { useMemo } from 'react';
import {
  _ribbon,
  _position,
  _triangle,
  _float,
  _wrapper,
} from './Ribbon.styled';
import {
  VIEW_BASKET_LEFT,
  VIEW_BASKET_RIGHT,
  VIEW_POSITION,
  VIEW_REVIEW,
  VIEW_WALLET,
} from 'core/remix/state/bubbles';
import { AnimateRibbons } from '../../pages/home/swap/animations';
import { useBubble } from 'core/hooks/remix/useBubble';
import { useKeys } from 'core/hooks/useKeys';

export const Ribbon = ({ left, right, y, children }) => {
  const key = useKeys(6);
  const [view, setView] = useBubble(VIEW_POSITION);
  const active = view === VIEW_WALLET || view === VIEW_REVIEW;
  const props = { $right: right, $left: left };

  const watch = [left, right, y, children];
  return useMemo(
    () => (
      <AnimateRibbons {...key[0]} left={left} right={right}>
        <_ribbon {...key[1]} $y={y} $active={active}>
          <_float {...key[2]} {...props}>
            <_wrapper {...key[3]}>
              <_position
                {...key[4]}
                {...props}
                onClick={(e) => {
                  setView(left ? VIEW_BASKET_LEFT : VIEW_BASKET_RIGHT);
                  e.stopPropagation();
                }}
              >
                {children}
              </_position>
            </_wrapper>
            <_triangle {...key[5]} {...props} />
          </_float>
        </_ribbon>
      </AnimateRibbons>
    ),
    watch,
  );
};

export default Ribbon;
