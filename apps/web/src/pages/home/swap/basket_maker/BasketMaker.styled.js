import styled from 'styled-components';
import { m } from 'framer-motion';

export const _basket_maker = styled(m.div)`
  position: absolute;
  z-index: ${({ theme }) => theme.zindex.swap.container};
  min-width: 100%;
  width: 100%;
  height: ${({ $height, $top }) => $height - $top || 0}px;
  transform: translateY(${({ $top }) => $top || 0}px);
  border-radius: ${({ theme }) => theme.border_radius['roundest_inside']};
  overflow: ${({ $active, $isAnimating }) =>
    $active || $isAnimating ? 'hidden' : 'visible'};
`;

export const _wrapper = styled(m.div)`
  position: relative;
  z-index: ${({ theme }) => theme.zindex.swap.basket};
  min-width: 100%;
  width: 100%;
  min-height: ${({ $height }) => $height || 0}px;
  height: ${({ $height }) => $height || 0}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: ${({ theme }) => theme.ribbon.background['primary']};
  border-radius: ${({ theme }) => theme.border_radius['roundest_inside']}
    ${({ theme }) => theme.border_radius['roundest_inside']}
    ${({ theme }) => theme.border_radius['roundest']}
    ${({ theme }) => theme.border_radius['roundest']};
`;

export const _container = styled.div`
  min-width: 50%;
  width: 50%;
  min-height: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
`;
