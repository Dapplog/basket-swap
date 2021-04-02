import styled from 'styled-components';

export const _popover = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zindex.popover};
  width: 0;
  height: 0;
  transform: translate(
    ${({ $left, $top }) => `${$left || 0}px, ${$top || 0}px`}
  );
`;

export const _container = styled.div`
  left: 50%;
  top: 50%;
`;
