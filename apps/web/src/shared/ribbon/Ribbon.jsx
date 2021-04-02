import React from 'react';
import {
  _ribbon,
  _position,
  _triangle,
  _float,
  _wrapper,
} from './Ribbon.styled';
import { useRemix } from 'core/hooks/remix/useRemix';
import {
  REVIEW_ACTIVE,
  SWAP_BASKET_ACTIVE,
  WALLET_ACTIVE,
} from 'core/remix/state/bubbles';
import { AnimateRibbons } from '../../pages/home/swap/animations';
import { useBubble } from 'core/hooks/remix/useBubble';

export const Ribbon = ({ left, right, y, children }) => {
  const [active, setActive] = useRemix(SWAP_BASKET_ACTIVE, '');
  const [walletActive] = useBubble(WALLET_ACTIVE);
  const [reviewActive] = useBubble(REVIEW_ACTIVE);
  const props = { $right: right, $left: left };

  return (
    <AnimateRibbons left={left} right={right}>
      <_ribbon $y={y} $active={walletActive || reviewActive}>
        <_float {...props}>
          <_wrapper>
            <_position
              {...props}
              onClick={(e) => {
                setActive(left ? 'left' : 'right');
                e.stopPropagation();
              }}
            >
              {children}
            </_position>
          </_wrapper>
          <_triangle {...props} />
        </_float>
      </_ribbon>
    </AnimateRibbons>
  );
};

export default Ribbon;
