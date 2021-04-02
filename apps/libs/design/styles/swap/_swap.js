import { css } from 'styled-components';

export const _swap = css`
  position: relative;
  z-index: ${({ theme }) => theme.zindex.swap['base']};
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
  box-shadow: 2px 2px 16px 0 rgba(0, 0, 0, 0.16);
  padding: 108px 24px 24px 24px;
  transition: background 250ms ease-out;
`;
